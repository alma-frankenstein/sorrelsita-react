import '../../src/App.css';
import React from 'react';
import Content from "./Content";
import Header from "./Header"
import HomeContent from "./Home";
import ShowControl from "./ShowControl";
import Navigation from "./Navigation";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <React.Fragment>
      <h4>in the App.js file</h4>
      <p>this's the Header component:</p>
      <Header />
      <Navigation />
      <p>navbar:</p>
      <Navbar />
      
      <ShowControl />
    </React.Fragment>
  );
}

export default App;
