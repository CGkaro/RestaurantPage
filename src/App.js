import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/Navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <h3>Example blah</h3>
      </React.Fragment>
    );
  }
}

export default App;
