import React from "react";
import { Button, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Route, Link } from "react-router-dom";

import Sidebar from "./Sidebar.js";
import Admin from "../pages/Admin";
import AllCustomers from "../pages/AllCustomers";
import AmalgamationOfCITCash from "../pages/AmalgamationOfCITCash";

const HeaderNavBar = () => {
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
              {/* https://stackoverflow.com/questions/54843302/reactjs-bootstrap-navbar-and-routing-not-working-together */}
              <Nav.Link href="/home" as={Link}>
                Home
              </Nav.Link>
              <Nav.Link href="/Admin" as={Link}>
                Admin
              </Nav.Link>
              <Nav.Link href="/allcustomers" as={Link}>
                All Customers
              </Nav.Link>
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
