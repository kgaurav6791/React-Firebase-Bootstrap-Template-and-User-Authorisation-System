import React from "react";
import HeaderNavBar from "../components/HeaderNavBar";
import Sidebar from "../components/Sidebar";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";

const Hidden = () => {
  const activateLasers = () => {};

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
          <h1 className="title">Hidden</h1>
          <Table size="sm" className="table-bordered table-hover">
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
                <td style={{}} className="">
                  <button>E</button>
                  {/* <Button
                    className=""
                    variant="primary"
                    onClick={activateLasers}
                    style={{}}
                  >
                    Edit/Update
                  </Button> */}
                </td>
                <td style={{}} className="">
                  <Button
                    className=""
                    variant="danger"
                    onClick={activateLasers}
                    style={{}}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
              {/* <tr className="table-secondary">
                <td>2</td>
                <td>2</td>
                <td>2</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={activateLasers}
                    style={{ display: "block" }}
                  >
                    Edit/update
                  </Button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={activateLasers}
                    style={{ display: "block" }}
                  >
                    Delete
                  </Button>
                </td>
              </tr> */}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Hidden;
