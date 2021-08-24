import React from "react";
// import { Carousel } from 'reactstrap';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';



function HomeContent(){
  return (
    <React.Fragment>
        {/* <script src="js/jquery-3.5.1.js"></script>
  <script src="js/scripts.js"></script>
  <script src="js/bootstrap.js" type="text/javascript"></script> */}
      <div class="homepageContent">
      <div class="row">
      <div class="col-6">

      <div >
      {/* <h4>React-Bootstrap Carousel Component</h4> */}
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-50"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
            alt="Image One"
          />
          {/* <Carousel.Caption>
            <h3>Label for first slide</h3>
            <p>Sample Text for Image One</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-50"
src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
            alt="Image Two"
          />
          {/* <Carousel.Caption>
            <h3>Label for second slide</h3>
            <p>Sample Text for Image Two</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
      </div>


        {/* <Carousel> */}
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-mdb-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item" data-mdb-interval="75">
                <img
                  src="img/IMG-3151.JPG"
                  class="d-block w-50"
                  alt="..."
                />
              </div>
              <div class="carousel-item active" data-mdb-interval="75">
                <img
                  src="img/IMG-3152.JPG"
                  class="d-block w-50"
                  alt="..."
                />
              </div>
              <div class="carousel-item" data-mdb-interval="75">
                <img
                  src="img/IMG-3153.JPG"
                  class="d-block w-50"
                  alt="..."
                />
              </div>
            </div>
        </div> 
      {/* </Carousel> */}


{/* <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> */}

      </div>
      <div class="col-5">
        <p>Sorrel is our very excellent friend. She makes spaces beautiful, and is generally a delightful
          top-quality person. </p>
      </div>
  </div>
    <div>
    {/* <script src="js/jquery-3.5.1.js" type="text/javascript">
      $(document).ready(function() {
        $('.carousel').carousel(
        'cycle',  
        )
      }); */}
    {/* </script> */}
    </div>
      </div>
    </React.Fragment>
  )
}

export default HomeContent;