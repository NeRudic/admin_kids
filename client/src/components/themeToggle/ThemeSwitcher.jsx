import { useState } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");
  const switchTheme = () => {
    setTheme(switchTheme === "light" ? "dark" : "light");
  };
}
