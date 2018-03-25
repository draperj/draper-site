import React, { Component } from "react";
import Header from "./components/header/Header";
import "./App.scss";
import CurrentlyWorkingWith from "./components/currentlyWorkingWith/CurrentlyWorkingWith";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <CurrentlyWorkingWith />
      </div>
    );
  }
}

export default App;
