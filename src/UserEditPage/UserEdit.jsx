/* eslint-disable react/prop-types */
import { useNavigate, useParams } from "react-router-dom";
import  { useState, useEffect } from "react";

const UserEdit = ({ userList, setUserList }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [userBg, setUserBg] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    const user = userList?.find((user) => user.id === parseInt(id));
    if (user) {
      setUserBg(user);
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
    }
  }, [id, userList]);

  const saveDetailHandler = () => {
    const updateData = userList.map((data) => {
      if (data.id == userBg.id) {
        return { ...data, name, email, phone };
      }
      return data;
    });
    setUserList(updateData);
    setIsEditable(false);
  };
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Edit User Details</h2>
      <button onClick={() => navigate("/")}>Back To </button>
      <div>
        {userBg && (
          <div style={{ border: "1px solid gray", padding: "9px" }}>
            {!isEditable && (
              <>
                <p>Name : {userBg.name}</p>
                <p>Email : {userBg.email}</p>
                <p>Mobile No. : {userBg.phone}</p>
                <p>
                  Address : {userBg.address.street},{userBg.address.zipcode}
                </p>
                <button onClick={() => setIsEditable(true)}>
                  Edit Details
                </button>
              </>
            )}
            {isEditable && (
              <>
                <p>
                  Name :{" "}
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />{" "}
                </p>
                <p>
                  Email :{" "}
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />{" "}
                </p>
                <p>
                  Phone :{" "}
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />{" "}
                </p>
                <p>
                  Address : {userBg.address.street},{userBg.address.zipcode}
                </p>
                <button onClick={saveDetailHandler}>Save Details</button>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default UserEdit;
