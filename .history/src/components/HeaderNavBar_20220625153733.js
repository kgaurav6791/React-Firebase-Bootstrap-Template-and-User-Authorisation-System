import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const HeaderNavBar = () => {
  return (
    <>
      <div className="box float-left pd-1 box fixed-top">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/home">Brinks Global</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <span className="text-light gap-2 float-right mx-2">
              Welcome, {user && user.email}
            </span>

            <span className="text-light gap-2 float-right">
              <Button variant="danger" onClick={handleLogout}>
                Log out
              </Button>
            </span>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default HeaderNavBar;
