import * as React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Hello from './containers/Hello'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Navbar />
        <Hello/>
      </div>
    );
  }
}

export default App;
