import styles from "./about.module.css";
import React from "react";
import { meAbout } from "../../assets/images";
import { aboutCards } from "../../const";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className={` container ${styles.aboutContainer}`}>
        <div className={styles.aboutMe}>
          <div className={styles.aboutMeImage}>
            <img src={meAbout} alt="Me" />
          </div>
        </div>

        <div className={styles.aboutContent}>
          <div className={styles.aboutCards}>
            {aboutCards.map(({ id, logo, heading, description }) => (
              <article key={id} className={styles.aboutCard}>
                <div className={styles.aboutIcon}>{logo}</div>
                <h5>{heading}</h5>
                <small>{description}</small>
              </article>
            ))}
          </div>

          <p>
            I have over 2 years of dedicated study and hands-on project
            experience, creating numerous projects for learning and skill
            development. While I haven’t yet stepped into a formal job role, I
            am now fully prepared and eager to begin my professional journey.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
