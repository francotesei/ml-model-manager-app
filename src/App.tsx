import * as React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Table from './components/Table';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Navbar />
        <Table />
      </div>
    );
  }
}

export default App;
