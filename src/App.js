import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      mosters: [
        {
          name: "A"
        },
        {
          name: "B"
        },
        {
          name: "C"
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map( monster => monster.map)}
      </div>
    );
  }
}

export default App;
