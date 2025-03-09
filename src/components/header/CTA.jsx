import styles from "./header.module.css";
import React from "react";

const CTA = () => {
  return (
    <div className={styles.cta}>
      <a
        href="https://docs.google.com/document/d/1wctCQrFqjGCS9nr7dytPnAluL8aXJZ2c/edit?usp=sharing&ouid=110828699296883501870&rtpof=true&sd=true"
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        View CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
