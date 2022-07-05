import React from "react";
import { Button, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Sidebar from "./Sidebar.js";
import Admin from "../pages/Admin";

const Home = () => {
  const { logOut, user } = useUserAuth();

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
      console.log(useUserAuth);
    }
  };
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
      <div className="main-container">
        {<Sidebar />}
        <div className="right-container">
          <h1 className="title">HOME</h1>

          <Admin />
        </div>
      </div>
    </>
  );
};

export default Home;
