import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { CheckBox } from "./CheckBox";
const Admin = (props) => {
  const { setToggle, toggle } = props;
  let history = useHistory();
  const handleLogout = () => {
    history.push("/");
  };
  return (
    <>
      <h1>Admin</h1>
      <CheckBox {...props} />
      <br />
      <button type="button" className="btn btn-primary " onClick={handleLogout}>
        Logout
      </button>
      &nbsp;
      <button
        type="button"
        className="btn btn-primary "
        onClick={() => history.push("/user")}
      >
        User
      </button>
    </>
  );
};

export { Admin };
