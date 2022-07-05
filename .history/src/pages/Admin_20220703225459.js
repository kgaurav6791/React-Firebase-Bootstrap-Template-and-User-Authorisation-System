import React from "react";
import HeaderNavBar from "../components/HeaderNavBar";
import Sidebar from "../components/Sidebar";
import Table from "react-bootstrap/Table";

const Admin = () => {
  return (
    <>
      <HeaderNavBar />

      <div className="main-container">
        {<Sidebar />}
        <div className="right-container">
          <h1 className="title">Admin</h1>
          <form name="formadmin">
          <Table
            size="sm"
            className="table-bordered table-responsive table-hover"
          >
         
              <thead>
                <tr className="table-primary">
                  <th>#</th>
                  <th>#</th>
                  <th>#</th>
                  <th>#</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-secondary">
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>
                    <button onclick="activateLasers()">Edit/Update</button>
                  </td>
                  <td>
                    <button onclick="activateLasers()">Delete</button>
                  </td>
                </tr>
                <tr className="table-secondary">
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>
                    <button onclick="activateLasers()">Edit/update</button>
                  </td>
                  <td>
                    <button onclick="activateLasers()">Delete</button>
                  </td>
                </tr>
              </tbody>
            </form>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Admin;
