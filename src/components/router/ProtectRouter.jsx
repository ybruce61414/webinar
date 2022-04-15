import React, { useContext, useEffect, useMemo } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import PropTypes from "prop-types";
import Login from "../login/Login";
import styles from "../../css/app.module.css";
import UserContext from "../../context/UserContext";
import COMMON_STATE from "../../local-constants/commonState";

const ProtectRouter = (props) => {
  const {
    routeConfig: { pages },
  } = props;
  const { userProfile } = useContext(UserContext);
  // const navigate = useNavigate();
  console.log("----ROUTER userProfile", userProfile);

  return (
    <div className={styles.container}>
      {props.children}
      <Routes>
        <Route
          path="/login"
          element={
            userProfile.state === COMMON_STATE.ready ? (
              <Navigate replace to="/" />
            ) : (
              <Login />
            )
          }
        />
        {pages.map((obj) => {
          const { element: Component, path, elementProps = {} } = obj;
          return (
            <Route
              key={`route-${path}}`}
              path={`/${path}`}
              element={<Component {...elementProps} />}
            />
          );
        })}
      </Routes>
    </div>
  );
};

ProtectRouter.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ProtectRouter;
