import React from "react";
import { Button, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Home = () => {
  const { logOut, user } = useUserAuth();

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-4 box mt-3 float-left">
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/home">Brinks Global</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            Hello Welcome <br />
            {user && user.email}
            <span className=" gap-2 float-right">
              <Button variant="primary" onClick={handleLogout}>
                Log out
              </Button>
            </span>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Home;
