import React, { useEffect, useState } from "react";
import HeaderNavBar from "../components/HeaderNavBar";
import Sidebar from "../components/Sidebar";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.js";

const Hidden = () => {
  const activateLasers = () => {};
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      //   Retrieves all fields in the document as an Object.
      //(method) QueryDocumentSnapshot<DocumentData>.data(options?: SnapshotOptions | undefined): DocumentData
      console.log(users);
    };

    getUsers();
  }, []);

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
          <Table size="sm" className="table-bordered table-hover align-middle">
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
                <td style={{ width: "1px" }} className="">
                  <Button
                    className=""
                    variant="primary"
                    onClick={activateLasers}
                  >
                    Edit/Update
                  </Button>
                </td>
                <td style={{ width: "1px" }} className="">
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
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Hidden;
