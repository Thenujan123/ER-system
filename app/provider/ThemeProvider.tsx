"use client";
import { ReactNode } from "react";
import { cn } from "../utility/cn";
import { useSetInitialTheme, useTheme } from "../stores/themeStore";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const { colorScheme } = useSetInitialTheme();
  const { theme, mode } = useTheme();

  if (!colorScheme) return null;
  return (
    <div
      className={cn("w-full h-full flex flex-col flex-1", {
        dark: mode === "system" && colorScheme && colorScheme.matches,
        light: mode === "system" && colorScheme && !colorScheme.matches,
        [mode]: mode !== "system",
      })}
    >
      {children}
    </div>
  );
};

export default ThemeProvider;
