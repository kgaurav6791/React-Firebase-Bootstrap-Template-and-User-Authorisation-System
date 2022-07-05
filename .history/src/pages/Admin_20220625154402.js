import React from "react";
import { Navbar } from "react-bootstrap";
import HeaderNavBar from "../components/HeaderNavBar";
import Sidebar from "../components/Sidebar";

const Admin = () => {
  return (
    <>
      <div>Admin</div>
      <HeaderNavBar />

      
        {<Sidebar />}
        <div className="right-container">
          <h1 className="title">Admin</h1>
        </div>
      </div>
    </>
  );
};

export default Admin;
