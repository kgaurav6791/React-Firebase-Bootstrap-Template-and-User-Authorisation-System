import React, { useEffect, useState, useReducer } from "react";
import HeaderNavBar from "../components/HeaderNavBar";
import Sidebar from "../components/Sidebar";
import Table from "react-bootstrap/Table";
import { Button } from "react-bootstrap";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import { db } from "../firebase.js";

const Hidden = () => {
  const activateLasers = () => {};
  const [users, setUsers] = useState([]);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAge, setNewAge] = useState(0);
  const usersCollectionRef = collection(db, "users");
  const [dataUpdated, setDataUpdated] = useState(0);
  const updateUser = async (id) => {
    const userDoc = doc(db, "users", id);
    const newFields = { name: newName, age: Number(newAge), email: newEmail };
    await updateDoc(userDoc, newFields);
    setDataUpdated(dataUpdated + 1);
    console.log("dataUpdated-updateuser");
  };
  const addUsers = async () => {
    await addDoc(usersCollectionRef, {
      name: newName,
      age: Number(newAge),
      email: newEmail,
      timeStamp: firebase.firestore.Timestamp.now(),
    });
    setDataUpdated(dataUpdated + 1);
    let htmlCollection = document
      .getElementById("addnewuserform")
      .getElementsByTagName("input");
    for (let i = 0; i < htmlCollection.length; i++) {
      htmlCollection[i].value = "";
      console.log(htmlCollection[i]);
    }
  };
  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    setDataUpdated(dataUpdated + 1);
    console.log("dataUpdated-deleteuser");
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
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <td>{user.email}</td>

                    <td style={{ width: "1px" }} className="">
                      <Button
                        className=""
                        variant="primary"
                        onClick={() => {
                          updateUser(user.id);
                        }}
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
              <tr
                className="table-success"
                key="addnewrow"
                style={{ paddingLeft: "200px" }}
              >
                <td colSpan="5" style={{}}>
                  Add New User
                </td>
              </tr>
              <tr id="addnewuserform" className="table-secondary" key="new">
                {" "}
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
                <td style={{ width: "1px" }} className="" colSpan={2}>
                  <Button className="" variant="primary" onClick={addUsers}>
                    Add New User
                  </Button>
                </td>
                {/* <td style={{ width: "1px" }} className="">
                  <Button
                    className=""
                    variant="danger"
                    onClick={() => {
                      deleteUser();
                    }}
                    style={{}}
                  >
                    Delete
                  </Button>
                </td> */}
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
