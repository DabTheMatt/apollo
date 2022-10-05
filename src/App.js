import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import logo from './logo.svg';

import './App.css';

import HomePage from "./Components/HomePage/HomePage";
import MainScreen from "./Components/MainScreen/MainScreen";

export default function App() {
  return (
    <div>
      <Routes>
          <Route path="/apollo/" element={<HomePage />} />
          <Route path="/apollo/play" element={<MainScreen />} />
          <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Ups! Nothing here - check url :)</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
