import { data } from "../../const";
import React from "react";
import styles from "./portfolio.module.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className={`container ${styles.portfolioContainer} `}>
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className={styles.portfolioItem}>
              <div className={styles.portfolioItemImage}>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>

              <div className={styles.portfolioItemCta}>
                <a
                  href={github}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
