import React from "react";
import HeaderNavBar from "../components/HeaderNavBar";
import Sidebar from "../components/Sidebar";

const Lodgment = () => {
  return (
    <>
      <HeaderNavBar />

      <div className="main-container">
        {<Sidebar />}
        <div className="right-container">
          <h1 className="title">Lodgment</h1>
        </div>
      </div>
    </>
  );
};

export default Lodgment;
