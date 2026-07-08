import React, { useContext } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { DarkModeContext } from "../../context/darkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
      className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-05 text-gray-01 hover:scale-110 transition-transform cursor-pointer"
    >
      {isDarkMode ? (
        <LightModeIcon fontSize="small" />
      ) : (
        <DarkModeIcon fontSize="small" />
      )}
    </button>
  );
}

export default DarkModeToggle;