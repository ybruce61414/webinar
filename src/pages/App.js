import React, { memo } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ContextProvider from "../context/ContextProvider";
import ProtectRouter from "../components/router/ProtectRouter";
import Home from "../components/main/Home";
import Header from "../components/header/Header";

function App() {
  const routeConfig = {
    pages: [{ element: Home, path: "/", elementProps: {} }],
  };

  console.log("----app render");

  return (
    <ContextProvider>
      <ProtectRouter routeConfig={routeConfig}>
        <Header />
      </ProtectRouter>
    </ContextProvider>
  );
}

export default memo(App);
