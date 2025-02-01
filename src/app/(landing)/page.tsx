"use client";

import { Button } from "@/components/ui/button";
import { HyperText } from "@/components/ui/hyper-text";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Particles } from "@/components/ui/particles";
import { useTheme } from "next-themes";
import React from "react";

import { IconCloudDemo } from "./icon-cloud-demo";

export default function Page() {
  const { theme } = useTheme();

  const color = theme === "light" ? "#000" : "#fff";
  return (
    <>
      <Particles
        className="absolute inset-0 z-0"
        color={color}
        ease={80}
        quantity={100}
        refresh
      />
      <div className="container grid min-h-[80vh] grid-cols-1 place-items-center gap-3 py-16 md:grid-cols-2 md:py-0">
        <div className="flex flex-col gap-3">
          <h1 className="flex items-center gap-3 text-5xl font-bold">
            <HyperText>GELECEK</HyperText>
            <NumberTicker
              className="whitespace-pre-wrap tracking-tighter"
              decimalPlaces={1}
              value={4.0}
            />
          </h1>
          <p className="max-w-xl flex-1 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic esse
            veniam inventore corrupti beatae exercitationem cupiditate
            reprehenderit. Saepe ad odit animi? Deserunt neque odio ducimus,
            perferendis odit ipsa maxime totam!
          </p>
          <div className="flex gap-3">
            <Button>Hadi Başlayalım</Button>
            <Button variant="secondary">Hadi Başlayalım</Button>
          </div>
        </div>
        <div className="hidden md:block">
          <IconCloudDemo />
        </div>
      </div>
    </>
  );
}
