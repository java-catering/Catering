import React, { Component } from 'react';
import { Router } from 'buttermilk';
import './App.css';
import Home from './Components/Home/';
import Menu from './Components/Menu';
import Missing from './Components/Missing';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router
            routes={[
              {
                path: '/',
                render: () => Home,
              },
              {
                path: '/menu',
                render: () => Menu,
              },
              {
                path: '*',
                render: () => Missing,
              }
            ]}
          />
      </div>
    );
  }
}

export default App;
