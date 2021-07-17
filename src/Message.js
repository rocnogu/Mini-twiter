import msgData from "./MSSG.json";
import usersData from "./USERS.json";
import { useState, useEffect } from "react";
import React from "react";
//
export default function Message() {
  const [message, setMessage] = useState();
  //fetch /messages/:id
  // useeffect with fetch inside
  return (
    <div>
      <h4>Message</h4>
      <div className="allmessagesbox">
        <p className="messagebox">{message ? message.text : "loading"}</p>
      </div>
    </div>
  );
}
