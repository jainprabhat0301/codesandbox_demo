import React from "react";
import { CheckBoxUi } from "../ui_component/CheckBox_ui";
import { checkBoxLabel } from "./data";
const CheckBoxComp = (props) => {
  const { state } = props;

  return (
    <>
      {Object.entries(state).map((el, index) => (
        <CheckBoxUi
          checked={el[1]}
          name={el[0]}
          label={checkBoxLabel[index]}
          {...props}
        />
      ))}
    </>
  );
};

export { CheckBoxComp };
