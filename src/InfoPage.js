import React,{useEffect, useState} from "react";
import './App.css';



const InfoPage = props => {

    return (
        <div className = "container">
        <div class = "child">
            <span><h1 marginbottom = '10'>Issue #{props.location.state.detail.number}: {props.location.state.detail.title}</h1></span>
            <span><h2>Organization: walmartlabs</h2></span>
            <h2>Repo: thorax</h2>
            <h2>Body: {props.location.state.detail.body}</h2>
            <h2>Created at: {props.location.state.detail.created_at}</h2>
            <h2>Most Recently Updated at: {props.location.state.detail.updated_at}</h2>
            <h2>User: {props.location.state.detail.user.login}</h2>
        </div>
        </div>
  );
}

export default InfoPage;
