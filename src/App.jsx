import React, { Component } from "react";
import Header from "./components/header/Header";
import "./App.scss";
import CurrentlyWorkingWith from "./components/currentlyWorkingWith/CurrentlyWorkingWith";
import Footer from "./components/footer/Footer";
import MoreAboutMe from "./components/moreAboutMe/MoreAboutMe";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MoreAboutMe />
        <CurrentlyWorkingWith />
        <Footer />
      </div>
    );
  }
}

export default App;
