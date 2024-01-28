import React from "react";
import classes from "./ItemUnitsControl.module.scss";
import AddIcon from "@mui/icons-material/Add";

type IUControlProps = {
  count: number;
  updateCount: (change: number) => void;
};

const ItemUnitsControl = (props: IUControlProps) => {
  const { count, updateCount } = props;

  return (
    <div className={classes.mainCont}>
      <button
        disabled={count === 1}
        className={classes.decrementBox}
        onClick={() => updateCount(-1)}
      >
        <div
          className={`${classes.minusSign} ${
            count === 1 && classes.disableSign
          }`}
        />
      </button>
      <div className={classes.countCont}>
        <span>{count}</span>
      </div>
      <button className={classes.decrementBox} onClick={() => updateCount(1)}>
        <AddIcon sx={{ width: 15, color: "black" }} />
      </button>
    </div>
  );
};

export default ItemUnitsControl;
