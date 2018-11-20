import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  UNSAFE_componentWillMount() {
    document.addEventListener('DOMContentLoaded', function () {
      if (!Notification) {
        alert('Desktop notifications not available in your browser. Try Chromium.'); 
        return;
      }
    
      if (Notification.permission !== "granted")
        Notification.requestPermission();
    });
  }

  handleNoti = () => {
    if (Notification.permission !== "granted")
      Notification.requestPermission();
    else {
      var notification = new Notification('Notification title', {
        icon: 'http://localhost:3000/favicon.ico',
        body: "Hey there! You've been notified!",
      });
  
      notification.onclick = function () {
        window.location.href = '/';     
      };
  
    }
  
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={this.handleNoti}>Notify me!</button>
        </header>
      </div>
    );
  }
}

export default App;
