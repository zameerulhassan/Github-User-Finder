import React from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";
import Alert from './components/layout/Alert'
class App extends React.Component {
  state = {
    users: [],
    isLoading: false,
    alert:null
  };
  // componentDidMount(){ //for now just getting app level state to share data with componenets
  //   //console.log(123)
  //   axios.get('https://api.github.com/users').then(res=>{
  //     console.log(res.data)
  //   }).catch(err=>{
  //     console.log(err)
  //   })

  // }

  // async componentDidMount() {
  //   //for now just getting app level state to share data with componenets
  //   //console.log(123)
  //   //console.log(process.env.REACT_APP_GITHUB_CLIENT_ID)
  //   this.setState({ isLoading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   //console.log(res.data)
  //   this.setState({ isLoading: false, users: res.data });
  // }

  //search Github Users
  // searchUsers=(text)=>{
  //   console.log(text)
  // }
  searchUsers = async (text) => {
    this.setState({ isLoading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    //console.log(res.data)
    this.setState({ isLoading: false, users: res.data.items });
  };
  clearUsers = () => {
    this.setState({ users: [], isLoading: false });
  };
  setAlert=(msg,type)=>{
    this.setState({alert:{msg,type}})
    setTimeout(()=>{
      this.setState({alert:null})
    },3000)
  }
  render() {
    const { isLoading, users } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
        <Alert alert={this.state.alert}/>
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users isLoading={isLoading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
