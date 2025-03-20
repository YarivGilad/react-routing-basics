import styles from './top-bar.module.css';

export function TopBar({ children }) {
  return (
    <div className={styles.container}>
      {children}
      <img className={styles.logo} src="./icons/logo.svg" alt="logo" />
    </div>
  );
} 