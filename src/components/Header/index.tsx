import styles from "./styles.module.css";

import CompleteLogo from "../../assets/complete-logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={CompleteLogo} alt="Um foguete seguido pelo textp todo" />
    </header>
  );
};
