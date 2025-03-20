import { Link } from "react-router-dom";
import styles from './links.module.css';

export const Links = () => (
  <ul className={styles.nav}>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
      <a href="/about">About</a>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
    <li>
      <Link to="/not-existing-route">Wrong</Link>
    </li>
  </ul>
); 