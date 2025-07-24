import { FaArrowDown } from "react-icons/fa";
import styles from "./header.module.css";
import CTA from "./CTA";
import { me } from "../../assets/images";
import HeaderSocial from "./HeaderSocials";
import { name, role } from "../../const";

const Header = () => {
  return (
    <header id="home">
      <div className={`container ${styles.headerContainer} `}>
        <h5>Hello I'm</h5>
        <h1>{name}</h1>
        <h5 className="text-light">{role}</h5>
        <CTA />
        <HeaderSocial />

        <div className={styles.me}>
          <img src={me} alt="my header" loading="lazy" />
        </div>

        <a
          href="#contact"
          className={styles.scrollDown}
          aria-label="scroll down"
        >
          <FaArrowDown aria-hidden="true" />
        </a>
      </div>
    </header>
  );
};

export default Header;
