/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const UserDetails = ({ userList }) => {
  const navigate = useNavigate();
  // const userArr = [...userList]

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Users Details Page</h1>
      <div>
        {userList &&
          userList?.map((data, index) => {
            return (
              <div
                key={index}
                style={{ border: "1px solid gray", padding: "9px" }}
              >
                <p>Name : {data.name}</p>
                <p>Email : {data.email}</p>
                <p>Mobile No. : {data.phone}</p>
                <p>
                  Address : {data.address.street},{data.address.zipcode}
                </p>
                <button onClick={() => navigate(`/user/${data.id}`)}>
                  Edit Details
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default UserDetails;
