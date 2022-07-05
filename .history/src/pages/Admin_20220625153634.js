import React from "react";
import { Navbar } from "react-bootstrap";
import HeaderNavBar from "../components/HeaderNavBar";
import Sidebar from "../components/Sidebar";

const Admin = () => {
  return (
    <>
      <div>Admin</div>
      <HeaderNavBar />
      <Navbar />
      <Sidebar />
    </>
  );
};

export default Admin;
