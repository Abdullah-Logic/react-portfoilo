import styles from "./footer.module.css";
import React from "react";
import { footerLink, Socials } from "../../const";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#header" className={styles.footerLogo}>
        Abdullah
      </a>

      <div className={styles.footerSocials}>
        {Socials.map(({ id, icon, link, tooltip }) => {
          const tooltipValue =
            tooltip.charAt(0).toUpperCase() + tooltip.slice(1);

          return (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              key={id}
              className={styles.tooltipContainer}
            >
              <div className={styles.icon}>{icon}</div>
              <span className={styles.tooltip}>{tooltipValue}</span>
            </a>
          );
        })}
      </div>

      <ul className={styles.permaLinks}>
        {footerLink.map(({ id, section }) => {
          const hrefValue = section.toLowerCase();

          return (
            <li key={id}>
              <a href={`#${hrefValue}`}>{section}</a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
