import React from "react";

function HomeContent(){
  return (
    <React.Fragment>
      <p>xxxxHomeContentxxxx</p>
      <div class="homepageContent">
      <div class="row">
      <div class="col-6">
          <div id="carouselExampleSlidesOnly" class="carousel slide" data-mdb-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-mdb-interval="75">
                <img
                  src="img/IMG-3151.JPG"
                  class="d-block w-50"
                  alt="..."
                />
              </div>
              <div class="carousel-item" data-mdb-interval="75">
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
      </div>
      <div class="col-5">
        <p>Sorrel is our very excellent friend. She makes spaces beautiful, and is generally a delightful
          top-quality person. </p>
      </div>
  </div>
    <div>
    {/* <script type="text/javascript">
      $(document).ready(function() {
        $('.carousel').carousel(
        'cycle',  
        )
      });
    </script> */}
    </div>
      </div>
    </React.Fragment>
  )
}

export default HomeContent;