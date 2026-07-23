import React from "react";
import HeaderNavBar from "./HeaderNavBar";
import Sidebar from "./Sidebar.jsx";

const Home = () => {
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

      <HeaderNavBar />
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
