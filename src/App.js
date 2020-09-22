import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from './components/users/Search'
import axios from "axios";
class App extends React.Component {
  state = {
    users: [],
    isLoading: false,
  };
  // componentDidMount(){ //for now just getting app level state to share data with componenets
  //   //console.log(123)
  //   axios.get('https://api.github.com/users').then(res=>{
  //     console.log(res.data)
  //   }).catch(err=>{
  //     console.log(err)
  //   })

  // }
  async componentDidMount() {
    //for now just getting app level state to share data with componenets
    //console.log(123)
    //console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
    this.setState({ isLoading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    //console.log(res.data)
    this.setState({ isLoading: false, users: res.data });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
        <Search/>
          <Users isLoading={this.state.isLoading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
