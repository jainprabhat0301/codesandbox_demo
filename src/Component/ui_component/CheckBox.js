import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const CheckBox = (props) => {
  const { state, setState } = props;
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
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
    </FormGroup>
  );
};
export { CheckBox };
