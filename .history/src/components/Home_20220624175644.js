import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const { logOut, user } = useUserAuth();

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-4 box mt-3 float-left">
        Hello Welcome <br />
        {user && user.email}
        <span className="d-grid gap-2 float-right">
          <Button variant="primary" onClick={handleLogout}>
            Log out
          </Button>
        </span>
      </div>
    </>
  );
};

export default Home;
