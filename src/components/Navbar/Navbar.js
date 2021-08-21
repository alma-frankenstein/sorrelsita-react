import React from "react";
import { Nav } from "reactstrap";
import MenuItems from "./MenuItems";
import "./Navbar.css";

class Navbar extends React.Component {
  render (){
    return(
      <div class="topnav">
      {/* // <nav className="NavbarItems"> */}
        <h1 className="navbar-logo">ReactLoge</h1>
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
    )
  }
}

export default Navbar;
