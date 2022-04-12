import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import styles from "../css/login.module.css";
import COMMON_STATE from "../local-constants/commonState";
import { ACTION_TYPE } from "../reducers/data";

const AuthButton = (props) => {
  let location = useLocation();
  console.log("---location", location);
  let navigate = useNavigate();
  // console.log("---navigate", navigate);

  // const [state, setState] = useState();
  const { userProfile, dispatchUserProfile } = useContext(UserContext);
  // console.log("--userProfile--", userProfile);

  const handleLogin = () => {
    console.log("-handleLogin--");
    // dispatchUserProfile({ type: ACTION_TYPE.dataReady });
  };

  const handleLogout = () => {
    console.log("-handleLogout--");
    dispatchUserProfile({ type: ACTION_TYPE.reload });
  };

  const handleBack = () => {
    console.log("--handleBack");
  };

  if (
    [COMMON_STATE.notReady, COMMON_STATE.loading].includes(userProfile.state) &&
    location.pathname === "/login"
  ) {
    return (
      <Link to="/">
        <button
          type="button"
          className={styles.authButton}
          onClick={handleBack}
        >
          back
        </button>
      </Link>
    );
  } else if (
    [COMMON_STATE.notReady, COMMON_STATE.loading].includes(userProfile.state)
  ) {
    return (
      <Link to="/login">
        <button
          type="button"
          className={styles.authButton}
          onClick={handleLogin}
        >
          login
        </button>
      </Link>
    );
  } else if ([COMMON_STATE.ready].includes(userProfile.state)) {
    return (
      <Link to="/">
        <button
          type="button"
          className={styles.authButton}
          onClick={handleLogout}
        >
          logout
        </button>
      </Link>
    );
  } else {
    return <>something wrong</>;
  }
};

export default AuthButton;
