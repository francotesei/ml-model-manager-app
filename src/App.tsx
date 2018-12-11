import * as React from 'react';
import './App.css';
import Table from './components/Table';
import Navbar from './components/Navbar';

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
