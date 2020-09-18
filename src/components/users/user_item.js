// @ts-nocheck
import React, { Component } from "react";

class UserItem extends Component {
  constructor() {
    super();
    //console.log(123)
    this.state = {
      id: "id",
      login: "mojobo",
      avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
      html_url: "https://github.com/mojombo",
    };
  }
  render(props) {
    return <div className="card text-center">
    <img src={this.state.avatar_url} alt="" className="round-img" style={{width:"100px"}} />
    <h3>{this.state.login}</h3>
    <div>
    <a href={this.state.html_url} className="btn btn-dark btn-sm my-1">more</a>
    </div>
    </div>;
  }
}

export default UserItem;
