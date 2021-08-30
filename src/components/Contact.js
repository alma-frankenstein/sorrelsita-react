import React from "react";

function ContactInfo(){
  return(
    <React.Fragment>
      <div class="row">
      <div class="col-7">
        <h3>Contact Sorrel:</h3>
        <p>Phone: xxx-xxx-xxxx</p>
        <p>Email: Sorrel@Sorrel.com</p>
        <p>Singing Telegram: xxx</p>
      </div>

      {/* <div class="row"> */}
      <div class="col-5">
        <img src="img/IMG-3152.JPG" 
        className="d-block w-50"
        alt="placeholder picture"
        style={{marginTop: 10}} />
      </div>
      </div>
      {/* </div> */}

    </React.Fragment>
  )
}

export default ContactInfo;
