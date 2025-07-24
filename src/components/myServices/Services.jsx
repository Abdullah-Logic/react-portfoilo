import { design, webDev, contentCreation } from "../../const";
import styles from "./services.module.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className={`container ${styles.servicesContainer} `}>
        <article className={styles.service}>
          <div className={styles.serviceHead}>
            <h3>UI/UX Design</h3>
          </div>

          <ul className={styles.serviceList}>
            {design.map(({ id, description }) => (
              <li key={id}>
                <BiCheck
                  className={styles.serviceListIcon}
                  aria-hidden="true"
                />
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </article>
        {/* END OF UI/UX  */}

        <article className={styles.service}>
          <div className={styles.serviceHead}>
            <h3>Web Development</h3>
          </div>

          <ul className={styles.serviceList}>
            {webDev.map(({ id, description }) => (
              <li key={id}>
                <BiCheck
                  className={styles.serviceListIcon}
                  aria-hidden="true"
                />
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </article>
        {/* END OF UI/UX  */}

        <article className={styles.service}>
          <div className={styles.serviceHead}>
            <h3>Content Creation</h3>
          </div>

          <ul className={styles.serviceList}>
            {contentCreation.map(({ id, description }) => (
              <li key={id}>
                <BiCheck
                  className={styles.serviceListIcon}
                  aria-hidden="true"
                />
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </article>
        {/* END OF UI/UX  */}
      </div>
    </section>
  );
};

export default Services;
