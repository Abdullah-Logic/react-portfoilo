import { FaArrowDown } from "react-icons/fa";
import styles from "./header.module.css";
import CTA from "./CTA";
import React from "react";
import { me } from "../../assets/images";
import HeaderSocial from "./HeaderSocials";

const Header = () => {
  return (
    <header id="home">
      <div className={`container ${styles.headerContainer} `}>
        <h5>Hello I'm</h5>
        <h1>Muhammad Abdullah</h1>
        <h5 className="text-light">Frontend Developer</h5>
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
