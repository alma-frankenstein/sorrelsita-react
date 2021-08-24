import React from "react";
import { Nav } from "reactstrap";
import MenuItems from "./MenuItems";
import "./Navbar.css";

class Navbar extends React.Component {
  render (){
    return(
      <div class="header">
          <h1>Welcome</h1>

          <div class="topnav">
          {/* // <nav className="NavbarItems"> */}
          {/* <h1 className="navbar-logo">navbar logo</h1> */}
          {/* <img src= "./favicon.ico" alt="favicon"/> */}
          <img src= "./furgus.jpg" alt="furgus" height="50px"/>

          <div className="menu-icon">
          </div>
              {MenuItems.map((item, index) => {
                return (
                  <a key={index} className={item.cName} href={item.url}>
                  {item.label}
                </a>
                )
              })}
        </div>
      </div>
    )
  }
}

export default Navbar;
