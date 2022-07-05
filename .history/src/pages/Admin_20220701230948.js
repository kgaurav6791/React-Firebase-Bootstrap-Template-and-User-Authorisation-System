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
                <td>1</td>
                <td>1</td>
              </tr>
              <tr className="table-secondary">
                <td>2</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
                <td>2</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Admin;
