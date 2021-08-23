import React from "react";
import { Nav } from "reactstrap";
import MenuItems from "./MenuItems";
// import "./Navbar.css";
// import "../../../public/css/styles.css"

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
            {/* <ul> */}
              {MenuItems.map((item, index) => {
                return (
                  // <li key={index}><a className={item.cName} href={item.url}>
                  //     {item.label}
                  //   </a>
                  // </li>
                  <a key={index} className={item.cName} href={item.url}>
                  {item.label}
                </a>
                )

              })}
              
            {/* </ul> */}
        {/* </nav> */}
        </div>
      </div>
    )
  }
}

export default Navbar;
