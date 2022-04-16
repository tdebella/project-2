import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import MainComp from "./Components/Main/MainComp";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <MainComp />
      </div>
    </div>
  );
}

export default App;
