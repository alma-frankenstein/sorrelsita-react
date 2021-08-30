import React from "react";
// import { Carousel } from 'reactstrap';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';



function HomeContent(){
  return (
    <React.Fragment>

      <div class="homepageContent">
      <div class="row">
      <div class="col-6">

      <div >
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-50"
            src="img/IMG-3151.JPG"
            alt="Image One"
          />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-50"
            src="img/IMG-3152.JPG"
            alt="Image Two"
          />
        </Carousel.Item>

        <Carousel.Item interval={2000}>
          <img
            className="d-block w-50"
            src="img/IMG-3153.JPG"
            alt="Image Two"
          />
        </Carousel.Item>
      </Carousel>
      </div>

      </div>

 
         <div class="col-5">
           <p>Sorrel is our very excellent friend. She makes spaces beautiful, and is generally a delightful
             top-quality person. </p>
         </div>

    </div>

      </div>
    </React.Fragment>
  )
}

export default HomeContent;