"use client";

import { cn } from "@/lib/utils";
import { useInView, useMotionValue, useSpring } from "motion/react";
import { ComponentPropsWithoutRef, useEffect, useRef } from "react";

interface NumberTickerProps extends ComponentPropsWithoutRef<"span"> {
  decimalPlaces?: number;
  delay?: number; // delay in s
  direction?: "down" | "up";
  value: number;
}

export function NumberTicker({
  className,
  decimalPlaces = 0,
  delay = 0,
  direction = "up",
  value,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { margin: "0px", once: true });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US", {
            maximumFractionDigits: decimalPlaces,
            minimumFractionDigits: decimalPlaces,
          }).format(Number(latest.toFixed(decimalPlaces)));
        }
      }),
    [springValue, decimalPlaces],
  );

  return (
    <span
      className={cn(
        "inline-block tabular-nums tracking-wider text-black dark:text-white",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
}
