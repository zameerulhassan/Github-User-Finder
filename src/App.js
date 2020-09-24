import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";
import Alert from "./components/layout/Alert";
import About from './components/pages/About'
class App extends React.Component {
  state = {
    users: [],
    isLoading: false,
    alert: null,
  };
  searchUsers = async (text) => {
    this.setState({ isLoading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ isLoading: false, users: res.data.items });
  };
  clearUsers = () => {
    this.setState({ users: [], isLoading: false });
  };
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000);
  };
  render() {
    const { isLoading, users } = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            {/* rendering multiple components in single route,
            simply use render to render*/}
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users isLoading={isLoading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' about component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
