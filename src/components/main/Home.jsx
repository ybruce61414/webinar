import React, { useState, useEffect, useContext } from "react";
import { INTRO_CONTENT, INTRO_TITLE } from "../../local-constants/appConstants";
import styles from "../../css/home.module.css";

const Home = (props) => {
  return (
    <div className={styles.intro}>
      <span className={styles.introTitle}>{INTRO_TITLE}</span>
      <span className={styles.introContent}>{INTRO_CONTENT}</span>
    </div>
  );
};

export default Home;
