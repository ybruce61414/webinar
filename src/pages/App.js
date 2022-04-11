import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { INTRO_TITLE, INTRO_CONTENT } from "../local-constants/appConstants";
import ContextProvider from "../context/ContextProvider";
import styles from "../css/app.module.css";
import LogButton from "../components/LogButton";
const imgSrc = require("../assets/acxlogo.png");

function App() {
  return (
    <Router>
      <ContextProvider>
        <div className={styles.container}>
          <header className={styles.header}>
            <img src={imgSrc} alt="alt" className={styles.image} />
            <LogButton />
          </header>
          <div className={styles.intro}>
            <span className={styles.introTitle}>{INTRO_TITLE}</span>
            <span className={styles.introContent}>{INTRO_CONTENT}</span>
          </div>

          {/*<nav>*/}
          {/*  <ul>*/}
          {/*    <li>*/}
          {/*      <Link to="/">Home</Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link to="/about">About</Link>*/}
          {/*    </li>*/}
          {/*    <li>*/}
          {/*      <Link to="/users">Users</Link>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</nav>*/}

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<Users />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </ContextProvider>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Login() {
  return <h2>Login</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
