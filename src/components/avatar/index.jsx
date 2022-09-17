import styles from "./avatar.module.scss";

const Avatar = ({ src, hasBorder = true }) => {
  return (
    <img
      className={hasBorder ? styles.avatarBorder : styles.avatar}
      src={src}
    />
  );
};

export default Avatar;
