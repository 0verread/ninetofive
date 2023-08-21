import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";

import Landing from "./pages/Landing";

import './App.css';

const App: React.FC = () => {
  return (
    <>
    <div className="App">
      <Header />
      <Landing />
    </div>
    </>
  );
}

export default App;