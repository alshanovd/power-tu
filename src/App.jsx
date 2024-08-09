import React, { lazy, Suspense, useState } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";
import Sidebar from "./Components/Sidebar";
import Login from "./Screens/Login";
import { Signup } from "./Screens/Signup";

function Dashboard() {
  return (
    <div className="container">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign_up" element={<Signup />} />
      </Routes>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Hello World for <code>Power TU</code>!
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}
