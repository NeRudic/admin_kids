import { ThemeContext } from "./ThemeContext";
import { useEffect, useState } from "react";
import { ChildrenInterface } from "../.types";

type ThemeState = "dark" | "light";

// {children} - деструктуризация
export function ThemeProvider({ children }: ChildrenInterface) {
  const [theme, setTheme] = useState<ThemeState>(() => {
    const current = localStorage.getItem("theme");
    return current === "dark" || current === "light" ? current : "light";
  });
  const themeHandler = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    // In React v.19 we can use just ThemeContext instead ThemeContext.Provider
    // It maked for lower versions
    <ThemeContext.Provider value={{ theme, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
}
