import React from "react";
import DatePicker from "./DatePicker";
import RoomSelector from "./RoomSelector";

function FormikControl(props) {
  const { control, ...rest } = props;

  switch (control) {
    case "date":
      return <DatePicker {...rest} />;
    case "occupancy":
      return <RoomSelector {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
