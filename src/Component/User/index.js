import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { AlertComp } from "./AlertComp";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));
const User = (props) => {
  const { setToggle, toggle, state, setState } = props;
  let history = useHistory();

  const handleLogout = () => {
    history.push("/");
  };

  return (
    <>
      <h1>User</h1>
      <AlertComp {...props} />
      <button type="button" className="btn btn-primary " onClick={handleLogout}>
        Logout
      </button>
      &nbsp;
      <button
        type="button"
        className="btn btn-primary "
        onClick={() => history.push("/admin")}
      >
        Admin
      </button>
    </>
  );
};

export { User };
