import React from "react";
import styles from "./portfolio.module.css";

const navArrow = () => {
  return (
    <div className={styles.arrowButton}>
      <div className={`${styles.one} ${styles.line}`}>
        <div className={styles.round}></div>
        <div className={styles.round}></div>
        <div className={styles.round}></div>
        <div className={styles.round}></div>
      </div>
      <div className={`${styles.two} ${styles.line}`}>
        <div className={styles.round}></div>
        <div className={styles.round}></div>
        <div className={styles.round}></div>
        <div className={styles.round}></div>
      </div>
      <div className={`${styles.three} ${styles.line}`}>
        <div className={styles.round}></div>
        <div className={styles.round}></div>
        <div className={styles.round}></div>
        <div className={styles.round}></div>
      </div>

      <div className={`${styles.four} ${styles.line}`}>
        <div className={styles.round}></div>
        <div className={styles.round}></div>
        <div className={styles.round}></div>
        <div className={styles.round}></div>
      </div>

      <div className={`${styles.five} ${styles.line}`}>
        <div className={styles.round}></div>
        <div className={styles.round}></div>
        <div className={styles.round}></div>
        <div className={styles.round}></div>
      </div>

      <div className={`${styles.six} ${styles.line}`}>
        <div className={styles.round}></div>
        <div className={styles.round}></div>
        <div className={styles.round}></div>
        <div className={styles.round}></div>
      </div>

      <div className={`${styles.seven} ${styles.line}`}>
        <div className={styles.round}></div>
        <div className={styles.round}></div>
        <div className={styles.round}></div>
        <div className={styles.round}></div>
      </div>
    </div>
  );
};

export default navArrow;
