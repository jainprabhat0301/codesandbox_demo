import React from "react";
import { useHistory } from "react-router-dom";
import { CheckBoxComp } from "./CheckBoxComp";

const Admin = (props) => {
  let history = useHistory();
  const handleLogout = () => {
    history.push("/");
  };
  return (
    <>
      <h1>Admin</h1>
      <CheckBoxComp {...props} />
      <button type="button" className="btn btn-primary " onClick={handleLogout}>
        Logout
      </button>
      &nbsp;
    </>
  );
};

export { Admin };

{
  /* <button
type="button"
className="btn btn-primary "
onClick={() => history.push("/user")}
>
User
</button> */
}
