import React from "react";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "../ui_component/CheckBox";

export function Checkbox(props) {
  const { state, setState } = props;
  console.log(Object.entries(state));
  const checkBoxLabel = [
    "Error Message",
    "Warning Message",
    "Information Message",
    "Success Message"
  ];
  const CheckBoxData = [
    {
      name: "checkedR",
      label: "Error Message"
    }
  ];
  const handleChange = (event) => {
    // console.log(state);
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedR}
              onChange={handleChange}
              name="checkedR"
            />
          }
          label="Error Message"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedO}
              onChange={handleChange}
              name="checkedO"
            />
          }
          label="Warning Message"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label="Information Message"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={state.checkedG}
              onChange={handleChange}
              name="checkedG"
            />
          }
          label="Success Message"
        />
      </FormGroup>
    </>
  );
}

export { Checkbox };
