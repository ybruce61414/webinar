import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import styles from '../css/app.module.css';
const INTRO_TITLE = 'Forex Webinars';
const INTRO_CONTENT = 'Whether you are new to foreign exchange trading or already have some market experience, we believe that a solid FX trading education is vital to your success as a trader.'

function App() {
  return (
    <Router>
      <div className={styles.container} >
        <header className={styles.header}>
          <img src={require("../assets/acxlogo.png")} alt="alt" width="214" height="112" />
        </header>
        <div className={styles.intro}>
          <span className={styles.introTitle}>{INTRO_TITLE}</span>
          <span className={styles.introContent}>{INTRO_CONTENT}</span>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
