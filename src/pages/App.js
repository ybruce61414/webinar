import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContextProvider from "../context/ContextProvider";
import ProtectRouter from "../components/ProtectRouter";
import styles from "../css/app.module.css";
import AuthButton from "../components/AuthButton";
import Home from "../components/Home";
const imgSrc = require("../assets/acxlogo.png");

function App() {
  const routeConfig = {
    pages: [{ element: Home, path: "/", elementProps: {} }],
  };

  return (
    <ContextProvider>
      <ProtectRouter routeConfig={routeConfig}>
        <header className={styles.header}>
          <img src={imgSrc} alt="alt" className={styles.image} />
          <AuthButton />
        </header>
      </ProtectRouter>
    </ContextProvider>
  );
}

export default App;
