import { useRef, useState } from "react";
import { data } from "../../const";
import styles from "./portfolio.module.css";
import NavArrow from "./navArrow";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const Portfolio = () => {
  const swiperRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = (swiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section id="portfolio" className={styles.portfolio}>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <Swiper
        className={`container ${styles.portfolioContainer}`}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={3}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          600: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1920: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {data.map(({ id, image, title, desc, tech, github, demo }) => (
          <SwiperSlide key={id} className={styles.portfolioItem}>
            <div className={styles.portfolioItemImage}>
              <img src={image} alt={title} loading="lazy" />
            </div>
            <h3>{title}</h3>
            <p className={`text-light ${styles.portfolioDesc}`}>{desc}</p>
            <p className={`${styles.portfolioTech}`}>
              <b>Tech Stack: </b>
              <span className="text-light">{tech}</span>
            </p>
            <div className={styles.portfolioItemCta}>
              <a
                href={github}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
              {demo && (
                <a href={demo} className="btn" target="_blank" rel="noreferrer">
                  Demo
                </a>
              )}
            </div>
            <div>
              <p className={`${styles.indication} text-light`}>
                <span className={styles.indicationArrows}>{"<<<"}</span>
                Swipe to navigate
                <span className={styles.indicationArrows}>{">>>"}</span>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={`${styles.buttonPrev} ${styles.swiperbutton} ${
          isBeginning ? styles.disabled : ""
        }`}
        onClick={() => swiperRef.current?.slidePrev()}
        disabled={isBeginning}
        aria-label="next button"
      >
        <NavArrow />
      </button>
      <button
        className={`${styles.buttonNext} ${styles.swiperbutton} ${
          isEnd ? styles.disabled : ""
        }`}
        onClick={() => swiperRef.current?.slideNext()}
        disabled={isEnd}
        aria-label="previous button"
      >
        <NavArrow />
      </button>
    </section>
  );
};

export default Portfolio;
