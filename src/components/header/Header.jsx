import { FaArrowDown } from "react-icons/fa";
import styles from "./header.module.css";
import CTA from "./CTA";
import { me } from "../../assets/images";
import HeaderSocial from "./HeaderSocials";
import ThemeSwitch from "../themeSwitch/ThemeSwitch";
import { name, role } from "../../const";

const Header = () => {
  return (
    <header id="home">
      <ThemeSwitch />
      <div className={`container ${styles.headerContainer} `}>
        <h5>Hello I'm</h5>
        <h1>{name}</h1>
        <h5 className="text-light">{role}</h5>
        <CTA />
        <HeaderSocial />

        <div className={styles.me}>
          <img src={me} alt="me" />
        </div>

        <a href="#contact" className={styles.scrollDown}>
          <FaArrowDown />
        </a>
      </div>
    </header>
  );
};

export default Header;
