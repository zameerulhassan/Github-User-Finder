import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import axios from 'axios'
class App extends React.Component {
  state={
    users:[],
    isLoading:false
  }
  // componentDidMount(){ //for now just getting app level state to share data with componenets
  //   //console.log(123)
  //   axios.get('https://api.github.com/users').then(res=>{
  //     console.log(res.data)
  //   }).catch(err=>{
  //     console.log(err)
  //   })

  // }
  async componentDidMount(){ //for now just getting app level state to share data with componenets
    //console.log(123)
    this.setState({isLoading:true})
    const res= await axios.get('https://api.github.com/users');
    //console.log(res.data)
    this.setState({isLoading:false,users:res.data})
  }
  render(){
    return (
      <div className="App">
      <Navbar />
      <div className="container">
      <Users isLoading={this.state.isLoading} users={this.state.users}/>
      </div>
      </div>
    ); 
  }
}

export default App;
