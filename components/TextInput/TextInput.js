import React from "react";
import PropTypes from "prop-types";
import styles from "./TextInput.module.scss";

function TextInput(props) {
  // console.log("props", props);
  const { fieldId, isTouched, errorVal, dominantClass, ...rest } = props;
  // const { type, value, onChange, onBlur, onFocus, placeholder } = rest;
  // console.log("rest: ", rest);
  return (
    <div>
      <input
        id={fieldId}
        name={fieldId}
        {...rest}
        className={`${styles.inputBox} ${dominantClass}`}
      />
      {isTouched && errorVal && <p className={styles.errorText}>{errorVal}</p>}
    </div>
  );
}

TextInput.propTypes = {
  fieldId: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  isTouched: PropTypes.bool.isRequired,
  errorVal: PropTypes.string.isRequired,
  dominantClass: PropTypes.string,
};

export default TextInput;
