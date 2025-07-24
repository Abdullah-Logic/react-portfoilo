import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { contactOption } from "../../const";
import styles from "./contact.module.css";
import { FaTimes } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [warnings, setWarnings] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const closeWarning = () => setErrorMessage("");

  const validateForm = () => {
    const validationRules = [
      {
        name: "name",
        rules: [
          [formData.name.trim() === "", "Please enter your name."],
          [
            !/^[A-Za-z\s]+$/.test(formData.name),
            "Name can only contain alphabets.",
          ],
          [
            formData.name.trim().length < 3,
            "Name must be at least 3 characters.",
          ],
        ],
      },
      {
        name: "email",
        rules: [
          [formData.email.trim() === "", "Please enter your email."],
          [
            !/^[\w.-]+@[a-zA-Z\d]+(?:\.[a-zA-Z\d-]+)*\.[a-zA-Z]{2,}$/.test(
              formData.email
            ),
            "Email is not valid.",
          ],
        ],
      },
      {
        name: "message",
        rules: [
          [formData.message.trim() === "", "Please enter a message."],
          [
            formData.message.trim().length < 10,
            "Message must be at least 10 characters.",
          ],
        ],
      },
    ];

    const newWarnings = {};
    validationRules.forEach(({ name, rules }) => {
      newWarnings[name] = rules.find(([condition]) => condition)?.[1] || "";
    });

    setWarnings(newWarnings);
    return !Object.values(newWarnings).some((warning) => warning !== "");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setWarnings((prev) => ({ ...prev, [name]: "" }));
  };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "email" ? value.trim() : value.trim().replace(/\s+/g, " "),
    }));
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    setIsSubmitting(true);
    setErrorMessage("");

    const originalSendForm = emailjs.sendForm;

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        form.current,
        process.env.REACT_APP_PUBLIC_API_KEY
      );

      setErrorMessage("Message sent successfully!");
      setTimeout(() => setErrorMessage(""), 10000);

      form.current.reset();
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setErrorMessage(
        "Error! We are having trouble sending your email. Please try again later."
      );
      setTimeout(() => setErrorMessage(""), 10000);
    } finally {
      setIsSubmitting(false);
      emailjs.sendForm = originalSendForm;
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div
        className={`container ${styles.container} ${styles.contactContainer}`}
      >
        <div className={styles.contactOptions}>
          {contactOption.map(({ id, logo, option, info, address }) => (
            <article className={styles.contactOption} key={id}>
              <div
                className={styles.contactOptionIcon}
                aria-hidden="true"
                focusable="false"
              >
                {logo}
              </div>
              <h4>{option}</h4>
              <h5>{info}</h5>
              <a href={address} target="_blank" rel="noreferrer">
                Send a message
              </a>
            </article>
          ))}
        </div>

        <form ref={form}>
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              placeholder="Your Full Name"
              required
              className={`${styles.inputField} ${
                warnings.name ? styles.inputError : ""
              }`}
            />
            <small className={styles.warningText}>{warnings.name}</small>
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              placeholder="Your Email"
              required
              className={`${styles.inputField} ${
                warnings.email ? styles.inputError : ""
              }`}
            />
            <small className={styles.warningText}>{warnings.email}</small>
          </div>

          <div>
            <textarea
              name="message"
              rows="7"
              value={formData.message}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              placeholder="Your Message"
              required
              className={`${styles.inputField} ${
                warnings.message ? styles.inputError : ""
              }`}
            />
            <small className={styles.warningText}>{warnings.message}</small>
          </div>

          <button
            type="button"
            name="Submit button"
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {errorMessage && (
            <p
              className={`${styles.message} ${
                errorMessage.includes("Error")
                  ? styles.errorMessage
                  : styles.successMessage
              }`}
            >
              <button
                onClick={closeWarning}
                className={styles.closeButton}
                name="close warning button"
              >
                <FaTimes aria-hidden="true" focusable="false" />
              </button>
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
