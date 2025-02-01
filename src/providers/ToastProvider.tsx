"use client";

import { useTheme } from "next-themes";
import React from "react";
import { Toaster, ToasterProps } from "sonner";

export default function ToastProvider() {
  const { theme } = useTheme();
  return <Toaster richColors theme={theme as ToasterProps["theme"]} />;
}
