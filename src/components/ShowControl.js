import React from "react";
import HomeContent from "./Home";
import Content from "./Content";
import ContactInfo from "./Contact";

class ShowControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showing: "home"};
  }

  render(){
    let nowShowing = null;
    if (this.state.showing === "content") {
      nowShowing = <Content />
    } else if (this.state.showing === "contact") {
      nowShowing = <ContactInfo />
    } else {
      nowShowing = <HomeContent />
    }
    return (
      <React.Fragment>
        {/* <p>ShowControl</p> */}
        {nowShowing}
      </React.Fragment>
    );
  }

}

export default ShowControl;