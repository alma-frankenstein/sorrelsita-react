import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
// import BrowserRouter from "react-router-dom";
import Routes from './components/Routes';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <App />
    <Routes />
  </BrowserRouter>, 
  document.getElementById('root')
);


