import React, { Component } from 'react';
import {TopBar} from "./TopBar";
import logo from '../assets/images/logo.svg';
import '../styles/App.css';
import {TOKEN_KEY} from "../constants";

import {Main} from "./Main";

class App extends Component {
    state = {
        isLoggedIn: Boolean(localStorage.getItem(TOKEN_KEY)),
    }
    handleLogin = (token) => {
        localStorage.setItem(TOKEN_KEY, token);
        this.setState({isLoggedIn: true});
    }

    handleLogout = () => {
        localStorage.removeItem(TOKEN_KEY);
        this.setState({isLoggedIn: false});
    }
  render() {
    return (
      <div className="App">
          <TopBar isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout}/>
          <Main isLoggedIn={this.state.isLoggedIn} handleLogin={this.handleLogin}/>
      </div>
    );
  }
}

export default App;
