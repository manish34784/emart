import React from "react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import classes from "./PhonePicker.module.scss";
// import "./PhonePicker.scss";

function PhonePicker(props) {
  // console.log({ classes });
  return (
    <PhoneInput
      {...props}
      containerClass={classes.phoneContainer}
      buttonClass={classes.phoneButton}
      inputClass={classes.phoneInput}
      // searchClass=""
      // dropdownClass=""
      buttonStyle={{}}
      inputStyle={
        {
          // width: "100%",
          // borderRadius: 20,
          // border: "none",
          // backgroundColor: classes.inputBgColor2,
        }
      }
      searchStyle={{}}
      dropdownStyle={{}}
      containerStyle={{}}
    />
  );
}

export default PhonePicker;
