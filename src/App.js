import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// http://jsonplaceholder.typicode.com/users
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }
  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(users => this.setState({monsters: users}))
    
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => 
          <h1 key={monster.id}>{monster.name}</h1>
        )}
      </div>
    );
  }
}

export default App;
