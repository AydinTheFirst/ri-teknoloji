"use client";

import { Button } from "@/components/ui/button";
import { useMounted } from "@/hooks/useMounted";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const isMounted = useMounted();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const Icon = theme === "light" ? Sun : Moon;

  if (!isMounted) {
    return null;
  }

  return (
    <Button onClick={toggleTheme} size="icon" variant="ghost">
      <Icon />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
