import React from "react";
// import { Nav } from "reactstrap";
import "../../index.css";

class Navbar extends React.Component {
  render (){
    return(
      <div class="header">
          <h1 style={{fontSize: 70}}>Welcome</h1>

          <div class="topnav">
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


// Error: The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.