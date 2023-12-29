import { useState, useEffect } from "react";
import { FaLightbulb as LightMode } from "react-icons/fa";
import { FaRegLightbulb as DarkMode } from "react-icons/fa";

export function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="dark-mode-toggle">
      <button onClick={toggleDarkMode}>
        {isDarkMode ? (
          <LightMode className="text-4xl m-5"></LightMode>
        ) : (
          <DarkMode className="text-4xl  m-5"></DarkMode>
        )}
      </button>
    </div>
  );
}
