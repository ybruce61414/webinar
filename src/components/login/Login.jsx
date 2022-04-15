import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import cookie from "js-cookie";
import UserContext from "../../context/UserContext";
import { ACTION_TYPE } from "../../reducers/data";
import { fetchPostUserLogin } from "../../api/auth";
import styles from "../../css/login.module.css";

const Login = (props) => {
  const { dispatchUserProfile, test, setTest } = useContext(UserContext);
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetchPostUserLogin({ bodyData: inputs }).then((value) => {
      if (value.status === 200) {
        cookie.set("token", value.data.auth["access_token"], { expires: 7 });
        dispatchUserProfile({
          type: ACTION_TYPE.dataReady,
          values: value.data,
        });
        setTest("done");

        navigate("/");
      } else {
        console.error(value.status);
      }
    });
  };

  return (
    <div className={styles.layout}>
      <form className={styles.container} onSubmit={handleSubmit}>
        <div className={styles["top-header"]}>
          <h3>Login</h3>
          <p>Enter your credentials to access your account</p>
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            id="email"
            name="email"
            value={inputs.email || ""}
            placeholder="Enter your account"
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputWrapper}>
          <input
            type="password"
            id="password"
            name="password"
            value={inputs.password || ""}
            placeholder="Enter your password"
            onChange={handleChange}
          />
        </div>
        <div className={styles.signup}>
          <button type="submit">Sign in</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
