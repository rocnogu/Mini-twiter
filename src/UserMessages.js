import msgData from "./MSSG.json";
import usersData from "./USERS.json";
import React from "react";
//

const user_id = Math.floor(Math.random() * 48) + 1;

const user = usersData.find((user) => user.id == user_id);
const user_messages = msgData.filter((msg) => msg.user_id === user_id);

//
export default function UserMessages() {
  return (
    <div>
      <h1>UserMessages</h1>
      <div className="allmessagesbox">
        {user_messages.map((msg) => (
          <p className="onlymessage">
            {msg.text} <br />
            Published at: {msg.date}
            From: {user.first_name}
          </p>
        ))}
      </div>
    </div>
  );
}
