import React, { Component } from 'react';
import './App.css';

import Header from './Component/Header';
import Content from './Component/Content';
import Footer from './Component/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Content/>
        
        <Footer/>
      </div>
    );
  }
}

export default App;