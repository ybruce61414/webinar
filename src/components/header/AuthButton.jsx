import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import cookie from "js-cookie";
import UserContext from "../../context/UserContext";
import styles from "../../css/login.module.css";
import COMMON_STATE from "../../local-constants/commonState";
import { ACTION_TYPE } from "../../reducers/data";

const AuthButton = (props) => {
  let location = useLocation();
  // console.log("---location", location);
  let navigate = useNavigate();
  // console.log("---navigate", navigate);
  // const [state, setState] = useState();
  // cookie.remove("token");

  const { userProfile, dispatchUserProfile, test, setTest } =
    useContext(UserContext);
  console.log("--authbtn userProfile--", userProfile, cookie.get());
  console.log("--authbtn test--", test);

  const handleLogin = () => {
    // let bodyData = {
    //   email: "yuntest@mailinator.com",
    //   password: "A123456",
    // };
    //
    // fetchPostUserLogin({ bodyData }).then((value) => {
    //   if (value.status === 200) {
    //     cookie.set("token", value.data.auth["access_token"], { expires: 7 });
    //     dispatchUserProfile({
    //       type: ACTION_TYPE.dataReady,
    //       values: value.data,
    //     });
    //   }
    // });
  };

  // cookie.remove("token");

  const handleLogout = () => {
    console.log("-handleLogout--", userProfile);
    dispatchUserProfile({ type: ACTION_TYPE.clear });
    cookie.remove("token");
  };

  const handleBack = () => {
    console.log("--handleBack", userProfile);
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
