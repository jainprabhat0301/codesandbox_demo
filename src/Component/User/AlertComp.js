import { makeStyles } from "@material-ui/core/styles";
import MuiAlert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
  }
}));

const AlertComp = (props) => {
  const { setToggle, toggle, state, setState } = props;
  const classes = useStyles();
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  return (
    <div className={classes.root}>
      {state.checkedR ? (
        <Alert severity="error">This is an error message!</Alert>
      ) : null}
      {state.checkedO ? (
        <Alert severity="warning">This is a warning message!</Alert>
      ) : null}
      {state.checkedB ? (
        <Alert severity="info">This is an information message!</Alert>
      ) : null}
      {state.checkedG ? (
        <Alert severity="success">This is a success message!</Alert>
      ) : null}
    </div>
  );
};

export { AlertComp };
