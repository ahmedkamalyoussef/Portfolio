import React, { useState, useEffect } from "react";
function Social() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      document.body.classList.add("dark-theme");
      setDarkMode(true);
    } else {
      document.body.classList.add("light-theme");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="home-social">
      <button onClick={toggleDarkMode} className="dark-mode-toggle home-social-icon sun-button">
        {darkMode ? (
          <i className="uil uil-sun home-social-icon"></i>
        ) : (
          <i className="uil uil-moon home-social-icon"></i>
        )}
      </button>
      <a
        href="https://github.com/KEMO414"
        className="home-social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/ahmedkamal414"
        className="home-social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>
    </div>
  );
}

export default Social;
