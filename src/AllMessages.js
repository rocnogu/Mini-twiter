import msgData from "./MSSG.json";
import usersData from "./USERS.json";
import { useState, useEffect } from "react";
import React from "react";
//
export default function AllMessages() {
  const [messages, setMessages] = useState();
  //fetch /messages/:id
  // useEffect with fetch inside
  return (
    <div className="UserMessages">
      <h1>ALLMessages</h1>
      <div className="allmessagesbox">
        <p>
          {msgData
            ? msgData.map((msgs) => (
                <p className="onlymessage">
                  MSG: {msgs.text}
                  <br />
                  Published at: {msgs.date}
                  <br />
                  From: {usersData.first_name}
                  <hr />
                </p>
              ))
            : "loading"}
        </p>
      </div>
    </div>
  );
}
