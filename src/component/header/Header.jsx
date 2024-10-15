import "./Header.css";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { CiGlobe } from "react-icons/ci";
import { AiOutlineUserAdd } from "react-icons/ai";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="Ozlandic" />
      </Link>
      <nav className={styles.navbar}>
        <div className={styles.search}>
          <FiSearch className={styles.icon} />
          <input type="search" placeholder="Search for courses and teachers" />
        </div>

        <div className={styles.lang}>
          <button>
            <CiGlobe className={styles.icon} />
          </button>
        </div>

        <Link to="signup" className={styles.signup}>
          <AiOutlineUserAdd className={styles.icon} />
          <span>Create profile</span>
        </Link>

        <Link to="login" className={styles.login}>
          <span>Log in</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
