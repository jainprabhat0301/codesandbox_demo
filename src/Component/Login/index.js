import React, { useState } from "react";
import "./login.css";
import { useHistory } from "react-router-dom";

const Login = ({ isAdmin, setIsAdmin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const handleLogin = () => {
    if (username && password) {
      if (username === "admin" && password === "admin") {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
      history.push("/dashboard");
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <div className="header-form">
          <h4 className="text-primary text-center">
            <i className="fa fa-user-circle" style={{ fontSize: "110px" }}></i>
          </h4>
          <div className="image"></div>
        </div>
        <div className="body-form">
          <form>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-user"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={handleLogin}
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export { Login };
