import React from "react";
import AuthButton from "./AuthButton";
import styles from "../../css/app.module.css";
const imgSrc = require("../../assets/acxlogo.png");

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={imgSrc} alt="alt" className={styles.image} />
      <AuthButton />
    </header>
  );
};

export default Header;
