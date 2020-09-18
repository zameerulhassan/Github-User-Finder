import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import UserItem from './components/users/user_item'
class App extends React.Component {
  render(){
    return (
      <div className="App">
      <Navbar />
      <UserItem />
      </div>
    ); 
  }
}

export default App;
