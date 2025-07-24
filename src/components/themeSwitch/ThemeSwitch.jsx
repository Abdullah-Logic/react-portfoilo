import React from "react";
import { FaRegSun } from "react-icons/fa6";
import { IoMoonOutline } from "react-icons/io5";
import styles from "./themeSwitch.module.css";
import { useTheme } from "../../hooks/useTheme";

const ThemeSwitch = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className={styles.switchWrapper}>
      <label className={`${styles.switchContainer} ${styles.tooltipContainer}`}>
        <input
          className={styles.switchInput}
          type="checkbox"
          role="switch"
          name="dark"
          checked={darkMode}
          onChange={toggleTheme}
          aria-checked={darkMode}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        />
        <span className={styles.switchTrack}></span>

        <span className={styles.switchIcons}>
          <FaRegSun
            className={styles.switchIcon}
            aria-hidden="true"
            focusable="false"
          />
          <IoMoonOutline
            className={styles.switchIcon}
            aria-hidden="true"
            focusable="false"
          />
        </span>

        <span className={styles.screenReaderOnly}>Dark Mode</span>

        <span className={styles.tooltip}>
          <span className={styles.modeText}>
            {darkMode ? "Dark Mode" : "Light Mode"}
          </span>
        </span>
      </label>
    </div>
  );
};

export default ThemeSwitch;
