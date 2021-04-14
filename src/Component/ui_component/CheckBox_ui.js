import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const CheckBoxUi = (props) => {
  const { checked, name, label, state, setState } = props;
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox checked={checked} onChange={handleChange} name={name} />
        }
        label={label}
      />
    </FormGroup>
  );
};
export { CheckBoxUi };
