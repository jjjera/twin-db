import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <ToastContainer />
            <Home/>
        </header>
      </div>
    );
  }
}

export default App;
