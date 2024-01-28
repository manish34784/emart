import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import classes from "./Arrow.module.scss";

function LeftArrow({ side, disabled, onClick }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type="button"
      className={classes.button + (disabled ? ` ${classes.hide}` : "")}
    >
      {side === "left" ? (
        <KeyboardArrowLeftIcon color={disabled ? "disabled" : "action"} />
      ) : (
        <KeyboardArrowRightIcon color={disabled ? "disabled" : "action"} />
      )}
    </button>
  );
}

export default LeftArrow;
