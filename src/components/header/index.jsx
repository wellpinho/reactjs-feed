import styles from "./header.module.scss";
import logo from "./../../assets/logo.svg";

const Header = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="" />
      <strong>Feed</strong>
    </div>
  );
};

export default Header;
