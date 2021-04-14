import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
const AlertUi = (props) => {
  const { severity, label } = props;
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  return <Alert severity={severity}>{label}</Alert>;
};

export { AlertUi };
