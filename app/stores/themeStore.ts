import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { create } from "zustand";
import Cookie from "js-cookie";
import CookieKeys from "../config/CookieKeys";

type Mode = "system" | "dark" | "light";

interface IthemeStore {
  states: {
    theme: string;
    mode: Mode;
  };
  actions: {
    setTheme: Dispatch<SetStateAction<string>>;
    setMode: Dispatch<SetStateAction<Mode>>;
  };
}

const useThemeStore = create<IthemeStore>()((set) => ({
  states: {
    theme: "",
    mode: "system",
  },
  actions: {
    setMode: (value) =>
      set(({ states }) => {
        const modeValue =
          typeof value === "function" ? value(states.mode) : value;
        const defaultedFallValue = modeValue ?? "system";
        Cookie.set(CookieKeys.COLOR_MODE, defaultedFallValue);
        return {
          states: {
            ...states,
            mode: modeValue,
          },
        };
      }),
    setTheme: (value) =>
      set(({ states }) => {
        return {
          states: {
            ...states,
            theme: typeof value === "function" ? value(states.theme) : value,
          },
        };
      }),
  },
}));

const useTheme = () => useThemeStore((state) => state.states);
const useThemeActions = () => useThemeStore((state) => state.actions);
const useSetInitialTheme = () => {
  const { setMode } = useThemeActions();
  const [colorScheme, setColorScheme] = useState<MediaQueryList | null>(null);

  useEffect(() => {
    const colorMode = Cookie.get(CookieKeys.COLOR_MODE);
    setMode(colorMode !== "undefined" ? (colorMode as Mode) : "system");
    setColorScheme(window.matchMedia("(prefers-color-scheme: dark)"));
  }, [setMode]);

  useEffect(() => {
    const handleChange = () => {
      setColorScheme(window.matchMedia("(prefers-color-scheme: dark)"));
    };

    colorScheme?.addEventListener("change", handleChange);

    return () => {
      colorScheme?.removeEventListener("change", handleChange);
    };
  }, [colorScheme]);

  return { colorScheme };
};
export { useTheme, useThemeActions, useSetInitialTheme };
