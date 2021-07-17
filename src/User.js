import React from "react";
import usersData from "./USERS.json";
//
export default function User({ userDetails }) {
  const user_id = Math.floor(Math.random() * 48) + 1;
  const user = usersData.find((user) => user.id == user_id);

  return (
    <div>
      <hr />
      <h1>User</h1>
      <div className="allmessagesbox">
        <p className="onlymessage">
          {user
            ? [
                <img src={user.photo} alt="user img missing" />,
                <br />,
                user.first_name,
                " ",
                user.last_name,
                <br />,
                user.email,
                <br />,
                "id: ",
                user.id
              ]
            : "loading user"}
        </p>
      </div>
      <hr />
    </div>
  );
}
