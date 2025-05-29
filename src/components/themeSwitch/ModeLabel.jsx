import styles from "./themeSwitch.module.css";

const ModeLabel = ({ darkMode }) => (
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
);

export default ModeLabel;
