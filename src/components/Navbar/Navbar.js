import React from "react";
import { Nav } from "reactstrap";
import "./Navbar.css";

class Navbar extends React.Component {
  render (){
    return(
      <div class="header">
          <h1>Welcome</h1>

          <div class="topnav">
          {/* <img src= "./favicon.ico" alt="favicon"/> */}
          <img src= "./furgus.jpg" alt="furgus" height="50px"/>

          <div className="menu-icon">
          </div>
            <a href="/home">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </div>
      </div>
    )
  }
}

export default Navbar;
