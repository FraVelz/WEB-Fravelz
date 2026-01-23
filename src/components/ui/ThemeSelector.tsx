import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export default function ThemeSelector() {
  const [theme, setTheme] = useState("auto");

  const changeTheme = (value: string) => {
    setTheme(value);

    if (value === "dark") {
      document.documentElement.classList.add("dark");
    } else if (value === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      // auto
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.classList.toggle("dark", prefersDark);
    }

    localStorage.setItem("theme", value);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "auto";
    changeTheme(savedTheme);
  }, []);

  return (
    <div className="place-self-center flex items-center gap-2 lg:mt-2">
      <label htmlFor="select-theme" className="sr-only">
        Selector de tema
      </label>

      <FontAwesomeIcon
        icon={faMoon}
        className="text-cyan-200 lg:hover:text-cyan-300"
      />

      <select
        id="select-theme"
        value={theme}
        onChange={(e) => changeTheme(e.target.value)}
        aria-label="Seleccionar tema"
        className="
          bg-gray-800 text-cyan-200
          border border-cyan-500/30
          hover:border-cyan-400/60
          rounded px-2 py-1
          text-sm
          transition-all
          cursor-pointer
        "
      >
        <option value="auto">Auto</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    </div>
  );
}
