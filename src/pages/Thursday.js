import React from "react";
import HeaderNavBar from "../components/HeaderNavBar";
import Sidebar from "../components/Sidebar";

const Thursday = () => {
  return (
    <>
      <HeaderNavBar />

      <div className="main-container">
        {<Sidebar />}
        <div className="right-container">
          <h1 className="title">Thursday</h1>
        </div>
      </div>
    </>
  );
};

export default Thursday;
