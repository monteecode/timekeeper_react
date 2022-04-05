import React, { Component } from "react";
import { Route } from "react-router-dom";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { checkForUser } from "./actions/login";
import { connect } from "react-redux";

import "./bootstrap/css/bootstrap-grid.css";
import "./bootstrap/css/bootstrap.min.css";
import "./App.css";
import Calendar from "./Calender";

componentDidMount(){
 
  let userID = localStorage.getItem('loggedInUserID');

  if(userID){
    this.props.checkForUser(userID, this.props.history)
  }else{
      return this.props.history.push('/')
  }

}


function App() {

  useEffect(()=> {
 
    let userID = localStorage.getItem('loggedInUserID');
  
    if(userID){
      this.props.checkForUser(userID, this.props.history)
    }else{
        return this.props.history.push('/')
    }
  
  })

 return (
  <div className="App">
      <Route exact path="/" component={LoginFormContainer} />
      <Route exact path="/calendar" component={CalendarContainer} />
          
  </div>
  ) 
}

export default App;
