import { navLink } from "../../const";
import styles from "./nav.module.css";
import { useState, useEffect } from "react";
import React from "react";
import ThemeSwitch from "../themeSwitch/ThemeSwitch";

const Tooltip = ({ text, children }) => (
  <div className={styles.tooltipContainer}>
    {children}
    <span className={styles.tooltip}>{text}</span>
  </div>
);

const Nav = () => {
  const [activeNav, setActiveNav] = useState(
    `#${navLink[0]?.section.toLowerCase()}`
  );
  const [isScrolling, setIsScrolling] = useState(false);

  const handleNavClick = (hrefValue) => {
    setActiveNav(hrefValue);
    setIsScrolling(true);

    setTimeout(() => {
      const section = document.querySelector(hrefValue);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  useEffect(() => {
    if (isScrolling) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveNav(`#${entry.target.id}`);
        });
      },
      { threshold: 0.5 }
    );

    navLink.forEach(({ section }) => {
      const element = document.getElementById(section.toLowerCase());
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [isScrolling]);

  useEffect(() => {
    if (!isScrolling) return;

    setTimeout(() => setIsScrolling(false), 500);
  }, [isScrolling]);

  // ---------- End Of Scroll ----------

  return (
    <nav>
      {navLink.map(({ id, icon, section, tooltip }, index) => {
        const hrefValue = `#${section.toLowerCase()}`;
        const tooltipValue = tooltip.charAt(0).toUpperCase() + tooltip.slice(1);
        return (
          <React.Fragment key={id}>
            <Tooltip text={tooltipValue}>
              <a
                href={hrefValue}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(hrefValue);
                }}
                className={activeNav === hrefValue ? styles.active : ""}
                aria-label={tooltip}
              >
                {icon}
              </a>
            </Tooltip>
            {index === 2 && <ThemeSwitch />}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Nav;
