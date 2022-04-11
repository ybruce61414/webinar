import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../css/log.module.css";

const LogButton = (props) => {
  const [state, setState] = useState();
  return (
    <Link to="/login">
      <button
        type="button"
        className={styles.logButton}
        onClick="alert('Hello world!')"
      >
        login
      </button>
    </Link>
  );
};

export default LogButton;
