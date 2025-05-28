import { FaRegSun } from "react-icons/fa6";
import { IoMoonOutline } from "react-icons/io5";
import styles from "./themeSwitch.module.css";
import { useTheme } from "../../hooks/useTheme";

const ThemeSwitch = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className={styles.switchWrapper}>
      <label className={styles.switchContainer} aria-label="Toggle dark mode">
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
          <FaRegSun className={styles.switchIcon} />
          <IoMoonOutline className={styles.switchIcon} />
        </span>

        <span className={styles.screenReaderOnly}>Dark Mode</span>
      </label>

      <span className={styles.switchLabel}>
        <span
          className={`${styles.modeText} ${!darkMode ? styles.visible : ""}`}
          aria-hidden={darkMode}
        >
          Light Mode
        </span>
        <span
          className={`${styles.modeText} ${darkMode ? styles.visible : ""}`}
          aria-hidden={!darkMode}
        >
          Dark Mode
        </span>
      </span>
    </div>
  );
};

export default ThemeSwitch;
