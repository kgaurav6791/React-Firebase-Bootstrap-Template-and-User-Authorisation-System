import React from "react";
import HeaderNavBar from "../components/HeaderNavBar";
import Sidebar from "../components/Sidebar";

const CashOrderByRUNNo = () => {
  return (
    <>
      <HeaderNavBar />

      <div className="main-container">
        {<Sidebar />}
        <div className="right-container">
          <h1 className="title">CashOrderByRUNNo</h1>
        </div>
      </div>
    </>
  );
};

export default CashOrderByRUNNo;
