import React, { useEffect, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import Login from "./Login";
import styles from "../css/app.module.css";

const ProtectRouter = (props) => {
  const {
    routeConfig: { pages },
  } = props;

  return (
    <Router>
      <div className={styles.container}>
        {props.children}
        <Routes>
          <Route path="/login" element={<Login />} />
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
    </Router>
  );
};

ProtectRouter.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ProtectRouter;
