import "./login.css";
import { useState } from "react";
import usersData from "./USERS.json";

// ENUM
const AUTH = {
  NOT_LOGGED_IN: "NOT_LOGGED_IN",
  LOGGED_IN: "LOGGED_IN",
  LOGIN_PENDING: "LOGIN_PENDING",
  LOGIN_FAILED: "LOGIN_FAILED"
};
const user_id = Math.floor(Math.random() * 48) + 1;
const user = usersData.find((user) => user.id == user_id);

export default function Login() {
  const [authStatus, setLoggedIn] = useState(AUTH.NOT_LOGGED_IN);
  const login = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(Math.random() > 0.5 ? 200 : 401), 2000);
    });
  };
  const handleLoginRequestOLD = async () => {
    event.preventDefault();
    setLoggedIn(AUTH.LOGIN_PENDING);
    const result = await login();
    switch (result) {
      case 200:
        setLoggedIn(AUTH.LOGGED_IN);
        break;
      case 401:
        setLoggedIn(AUTH.LOGIN_FAILED);
        break;
      default:
        alert("didn't understand API response");
        setLoggedIn(AUTH.NOT_LOGGED_IN);
    }
  };
  const handleLoginRequest = () => {
    event.preventDefault();
    setLoggedIn(AUTH.LOGIN_PENDING);
    login().then((result) => {
      console.log(result);
      switch (result) {
        case 200:
          setLoggedIn(AUTH.LOGGED_IN);
          break;
        case 401:
          setLoggedIn(AUTH.LOGIN_FAILED);
          break;
        default:
          alert("didn't understand API response");
          setLoggedIn(AUTH.NOT_LOGGED_IN);
      }
    });
  };
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">
        <h2 className="active"> Sign In </h2>
        <h2 className="inactive underlineHover">Sign Up </h2>

        <div className="fadeIn first">
          <img src={user.photo} id="icon" alt="User Icon" />
        </div>
        <form onSubmit={handleLoginRequest}>
          <input
            type="text"
            id="login"
            className="fadeIn second"
            name="login"
            placeholder="login"
          />
          <input
            type="text"
            id="password"
            className="fadeIn third"
            name="login"
            placeholder="password"
          />
          <input type="submit" className="fadeIn fourth" value="Log In" />
        </form>

        <h2>{authStatus}</h2>

        <div id="formFooter">
          <a className="underlineHover" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
}
