import { Socials } from "../../const";
import styles from "./header.module.css";

const HeaderSocials = () => {
  return (
    <div className={styles.headerSocials}>
      {Socials.map(({ id, icon, link, tooltip }) => {
        const tooltipValue = tooltip.charAt(0).toUpperCase() + tooltip.slice(1);

        return (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            key={id}
            className={styles.tooltipContainer}
            aria-label={tooltip}
          >
            <div className={styles.icon} aria-hidden="true">
              {icon}
            </div>
            <span className={styles.tooltip}>{tooltipValue}</span>
          </a>
        );
      })}
    </div>
  );
};

export default HeaderSocials;
