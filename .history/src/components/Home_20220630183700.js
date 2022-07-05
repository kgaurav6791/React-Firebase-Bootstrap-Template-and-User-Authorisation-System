import React from "react";
import { Button, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { useMemo } from "react";
import HeaderNavBar from "./HeaderNavBar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Sidebar from "./Sidebar.js";
import Admin from "../pages/Admin";
import AllCustomers from "../pages/AllCustomers";
import AmalgamationOfCITCash from "../pages/AmalgamationOfCITCash";

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
      {/* {useMemo(
        () => (
          <div>
            <HeaderNavBar />
          </div>
        ),
        []
      )} */}

      {/* <HeaderNavBar />  */}
      <div className="main-container">
        {<Sidebar />}
        <div className="right-container">
          <h1 className="title">Home</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
