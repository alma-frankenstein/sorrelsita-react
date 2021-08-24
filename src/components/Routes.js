import React from "react";
import HomeContent from "./Home";
import Content from "./Content";
import ContactInfo from "./Contact";
import Navbar from "./Navbar/Navbar";
import  { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

function Routes(){
  return(
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/home" component={HomeContent} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/about" component={Content} />
        <Route exact path="/contact" component={ContactInfo} />
      </Switch>
    </div>
  );
}

export default Routes;