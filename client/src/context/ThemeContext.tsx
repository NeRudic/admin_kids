import { createContext } from "react";

export interface ThemeContextType {
  theme: "light" | "dark";
  themeHandler: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);
