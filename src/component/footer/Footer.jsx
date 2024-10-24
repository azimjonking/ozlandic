import { Link } from "react-router-dom";
import "./Footer.css";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.linksContent}>
        <ul className={styles.links}>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/faq">FAQ</Link>
          </li>
        </ul>
        <div className={styles.copyright}>
          <h3>All Right Reserved.</h3>
          <p>
            &copy; 2024 Ozlandic Academy LLC |{" "}
            <Link to="/">Terms and Conditions</Link> |{" "}
            <Link to="/">Privacy Policy</Link>
          </p>
        </div>
      </div>
      <div className={styles.contact}>
        <h3>Contact Us</h3>
        <ul>
          <li>
            <a href="mailto:ozlandicacademy11@mail.ru" target="_blank">
              ozlandicacademy11@mail.ru
            </a>
          </li>
          <li>
            <a href="tel:998931900081">+998-93-190-00-81</a>
          </li>
        </ul>
      </div>
      <div className={styles.info}>
        <div className={styles.content}>
          <span>Year Established</span>
          <p>August 8, 2021</p>
        </div>
        <div className={styles.content}>
          <span>Founder and CEO</span>
          <p>Bakhodir Ergashev Abdumutalovich</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
