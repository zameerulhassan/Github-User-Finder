// @ts-nocheck
//stateless functional component
import React from "react";

const UserItem =(props)=> {
    const {avatar_url,login,html_url}=props.user
    return <div className="card text-center">
    <img src={avatar_url} alt="" className="round-img" style={{width:"60px"}} />
    <h3>{login}</h3>
    <div>
    <a href={html_url} className="btn btn-dark btn-sm my-1">more</a>
    </div>
    </div>;
}
export default UserItem;
