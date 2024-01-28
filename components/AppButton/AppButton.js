import React from "react";
import PropTypes, { ReactElementLike } from "prop-types";
import styles from "./AppButtonStyles";

function AppButton(props) {
  const { title, titleStyle, containerStyles, onClick } = props;

  function nonBreakingTitle(value) {
    const parts = value.split(" ");
    return parts.join(String.fromCharCode(160)); // 160 char code for &nbsp;
  }

  return (
    <button
      type="submit"
      style={{ ...styles.buttonBox, ...containerStyles }}
      onClick={onClick}
    >
      <p style={{ ...styles.title, ...titleStyle }}>
        {nonBreakingTitle(title)}
      </p>
    </button>
  );
}

AppButton.propTypes = {
  title: PropTypes.string.isRequired,
  titleStyle: PropTypes.shape({
    color: PropTypes.string,
    fontWeight: PropTypes.string,
    fontSize: PropTypes.string,
  }),
  titleStyle: PropTypes.shape({
    color: PropTypes.string,
    fontWeight: PropTypes.string,
    fontSize: PropTypes.string,
  }),
  // containerStyles: PropTypes.shape({
  //   marginTop: PropTypes.string,
  // }),
  containerStyles: PropTypes.object,
  onClick: PropTypes.func,
};

export default AppButton;
