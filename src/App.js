import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav, NavItem, Navbar } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Navbar>
          <Nav>
            <NavItem>
            Home
            </NavItem>
            <NavItem>
          About
            </NavItem>
            <NavItem>
          Contact
            </NavItem>
          </Nav>
        </Navbar>
        <p className="App-intro">
          Hello from Git!
        </p>
      </div>
    );
  }
}

export default App;
