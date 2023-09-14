import "./App.css";
import UserDetails from "./UserDetails/UserDetails";
import UserEdit from "./UserEditPage/UserEdit";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { users } from "./services/usersData";

export default function App() {
  const [userList, setUserList] = useState();

  useEffect(() => {
    users().then((data) => {
      const arr = [...data];
      setUserList(arr);
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<UserDetails userList={userList} />} />
      <Route
        path="/user/:id"
        element={<UserEdit userList={userList} setUserList={setUserList} />}
      />
    </Routes>
  );
}
