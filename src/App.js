import "./index.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "./Users";
import { useState, useEffect } from "react";
import User from "./User";
import UserMessages from "./UserMessages";
import Message from "./Message";
import msgData from "./MSSG.json";
import usersData from "./USERS.json";
import SearchBar from "./SearchBar";
import AllMessages from "./AllMessages";
import Login from "./Login";

//
export default function App() {
  //
  const [result, setResult] = useState(usersData);
  //
  const [msg, setMsg] = useState();
  const [users, setUsers] = useState();

  useEffect(() => {
    setMsg(msgData);
  }, []);

  useEffect(() => {
    setUsers(usersData);
  }, []);
  //

  // return  return  return  return  return  return  return  return  return

  return (
    <div className="App">
      <hr />
      <div className="components">
        <Router>
          <SearchBar result={result} />

          <nav>
            <Link className="link" selected="active" to="/">
              Home
            </Link>{" "}
            {"  "}
            <Link className="link" selected="active" to="/users">
              Users
            </Link>{" "}
            {"  "}
            <Link className="link" selected="active" to="/user">
              User
            </Link>{" "}
            {"  "}
            <Link className="link" selected="active" to="/usermessages">
              UserMessages
            </Link>{" "}
            {"  "}
            <Link className="link" selected="active" to="/login">
              Login
            </Link>{" "}
            {"  "}
          </nav>
          <hr />

          <div>
            <Switch>
              <Route exact path="/">
                <div className="userbox">
                  <User />
                </div>

                <AllMessages />
              </Route>

              <Route exact path="/users">
                <Users />
              </Route>

              <Route exact path="/user">
                <User />
              </Route>

              <Route exact path="/message">
                <Message />
              </Route>

              <Route exact path="/usermessages">
                <UserMessages />
              </Route>

              <Route exact path="/login">
                <Login />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
      <hr />
      <footer> copyright message</footer>
    </div>
  );
}
