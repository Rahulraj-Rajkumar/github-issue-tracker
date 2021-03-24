import React,{useEffect, useState} from "react";
import './App.css';
import Issue from "./Issue";
import Paginationa from "./components/Paginater"
import {Route, Switch} from "react-router-dom";
import MainPage from "./MainPage"
import InfoPage from "./InfoPage"


function App() {
  return (
    <Switch>
      <Route exact path = "/" render={(props) => <MainPage {...props} /> } />
      <Route
        exact
        path = "/:issueID"
        render={(props) => <InfoPage {...props} />}
      />  
    </Switch>
  );
}

export default App;
