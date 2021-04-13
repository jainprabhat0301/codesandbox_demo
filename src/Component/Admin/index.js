import React from "react";
import { useHistory } from "react-router-dom";

const Admin = () => {
  let history = useHistory();

  const handleLogout = () => {
    history.push("/");
  };
  return (
    <>
      <h1>Admin</h1>
      <button type="button" className="btn btn-primary " onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export { Admin };
