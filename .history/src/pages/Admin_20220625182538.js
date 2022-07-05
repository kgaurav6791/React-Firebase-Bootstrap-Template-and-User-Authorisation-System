import React from "react";
import HeaderNavBar from "../components/HeaderNavBar";
import Sidebar from "../components/Sidebar";

const Admin = () => {
  return (
    <>
      <div>Admin</div>
      <HeaderNavBar />

      <div className="main-container">
        {<Sidebar />}
        <div className="right-container">
          <h1 className="title">Admin</h1>
        </div>
      </div>
    </>
  );
};

export default Admin;
