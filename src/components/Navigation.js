import React from 'react';
// import {Navbar, Nav, Container} from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (
    <React.Fragment>
      {/* <Navbar collapseOnSelect fixid='top' expand='sm' bg='dark' variant='dark'>
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav>
              <Nav.Link href='/homepage'>Home</Nav.Link>
              <Nav.Link href='/content'>Rah Rah</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      <div class="topnav">
        <a href='#'>Home</a>
        <a href='/content'> content pageRah Rah</a>
      </div>
    </React.Fragment>
  );
}




export default Navigation;
