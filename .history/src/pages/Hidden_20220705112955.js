import React, { useEffect, useState, useReducer } from "react";
import HeaderNavBar from "../components/HeaderNavBar";
import Sidebar from "../components/Sidebar";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase.js";

const Hidden = () => {
  const activateLasers = () => {};
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAge, setNewAge] = useState(0);
  const usersCollectionRef = collection(db, "users");
  const [dataUpdated, setDataUpdated] = useState(0);
  // const updateUser = async (id, age) => {
  //   const userDoc = doc(db, "users", id);
  //   const newFields = { age: age + 1 };
  //   await updateDoc(userDoc, newFields);
  // };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    setDataUpdated(dataUpdated + 1);
    console.log("dataUpdated");
  };
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log(data, "yooo");
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      //   Retrieves all fields in the document as an Object.
      //(method) QueryDocumentSnapshot<DocumentData>.data(options?: SnapshotOptions | undefined): DocumentData
      console.log(users);
    };

    getUsers();
  }, [dataUpdated]);

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
              {users.map((user) => {
                return (
                  <tr className="table-secondary" key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.age} </td>
                    <td>{user.email} </td>

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
                        onClick={() => {
                          deleteUser(user.id);
                        }}
                        style={{}}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
              <tr className="table-secondary" key={user.id}>
                <td>
                  {" "}
                  <input
                    placeholder="Name..."
                    onChange={(event) => {
                      setNewName(event.target.value);
                    }}
                  />{" "}
                </td>
                <td>
                  <input
                    type="number"
                    placeholder="Age..."
                    onChange={(event) => {
                      setNewAge(event.target.value);
                    }}
                  />{" "}
                </td>
                <td>
                  <input
                    type="email"
                    placeholder="Email..."
                    onChange={(event) => {
                      setNewEmail(event.target.value);
                    }}
                  />{" "}
                </td>

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
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                    style={{}}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
          <hr />
          <Table size="sm" className="table-bordered table-hover align-middle">
            <thead>
              <tr className="table-primary">
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>#</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr className="table-secondary" key={user.id}>
                    <td>
                      {" "}
                      <input
                        placeholder="Name..."
                        onChange={(event) => {
                          setNewName(event.target.value);
                        }}
                      />{" "}
                    </td>
                    <td>
                      <input
                        type="number"
                        placeholder="Age..."
                        onChange={(event) => {
                          setNewAge(event.target.value);
                        }}
                      />{" "}
                    </td>
                    <td>
                      <input
                        type="email"
                        placeholder="Email..."
                        onChange={(event) => {
                          setNewEmail(event.target.value);
                        }}
                      />{" "}
                    </td>

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
                        onClick={() => {
                          deleteUser(user.id);
                        }}
                        style={{}}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Hidden;
