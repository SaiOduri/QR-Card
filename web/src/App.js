import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SocialRow from './SocialRow.js';

class App extends Component {
  render() {
    return (
      <div class="App">
        <SocialRow />
        <SocialRow />
      </div>
    );
  }
}

export default App;
