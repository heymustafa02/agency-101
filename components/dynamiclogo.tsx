"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export default function DynamicLogo() {
  const { theme } = useTheme();
  
  return (
    <Image
      src={theme === "dark" ? "/logo-light.png" : "/logo-dark.png"}
      alt="Logo"
      width={32}
      height={32}
      priority
      className="h-8 w-auto"
    />
  );
}