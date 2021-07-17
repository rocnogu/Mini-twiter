import React from "react";
import usersData from "./USERS.json";

export default function Users() {
  return (
    <div>
      <h1>Users</h1>
      <div className="allmessagesbox">
        {" "}
        {usersData.map((user) => (
          <p className="onlymessage">
            {" "}
            <img src={user.photo} alt="user img missing" />
            <br /> {user.first_name}
            <br /> {user.last_name}
            <br /> {user.email}{" "}
          </p>
        ))}{" "}
      </div>
    </div>
  );
}
