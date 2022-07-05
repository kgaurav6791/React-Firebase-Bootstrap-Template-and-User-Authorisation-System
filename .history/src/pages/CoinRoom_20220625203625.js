import React from "react";
import HeaderNavBar from "../components/HeaderNavBar";
import Sidebar from "../components/Sidebar";
import HeaderNavBar from "./components/HeaderNavBar";
const CoinRoom = () => {
  return (
    <>
      <HeaderNavBar />

      <div className="main-container">
        {<Sidebar />}
        <div className="right-container">
          <h1 className="title">CoinRoom</h1>
        </div>
      </div>
    </>
  );
};

export default CoinRoom;
