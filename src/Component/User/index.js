import React from "react";
import { useHistory } from "react-router-dom";

const User = () => {
  let history = useHistory();
  const handleLogout = () => {
    history.push("/");
  };
  return (
    <>
      <h1>User</h1>;
      <button type="button" className="btn btn-primary " onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export { User };
