"use client";
import React, { useState } from "react";

const NSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.style.backgroundColor = isDarkMode ? "#ffffff" : "#121212";
    document.body.style.color = isDarkMode ? "#000000" : "#ffffff";
  };

  return (
    <button
      onClick={toggleDarkMode}
      style={{
        padding: "3px 8px",
        backgroundColor: isDarkMode ? "#333" : "#ddd",
        color: isDarkMode ? "#fff" : "#000",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 1s",
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = isDarkMode ? "#666" : "#AAA";
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = isDarkMode ? "#333" : "#ddd";
      }}
    >
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default NSwitch;
