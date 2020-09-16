import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
class App extends React.Component {
  render(){
    return (
      <div className="App">
      <Navbar title="Github Finder" icon="fab fa-github"/>
      </div>
    ); 
  }
}

export default App;
