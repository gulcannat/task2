
import React, { Component } from "react";
import Contacts from "./contacts";
import Experience from "./experience";
import PersonalInfo from "./personalinfo";
class UserCV extends Component{
   render(){
    return(
        <>
        <PersonalInfo />
        <Experience />
        <Contacts />
      </>
    );
  }
}

export default UserCV;
