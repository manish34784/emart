import React from "react";
// import "./TempTest.scss";
import classes from "./TempTest1.module.scss";

function TempTest() {
  console.log({ classes });
  return (
    // <div className="main">
    //   <div className="hero">
    //     <label>Name</label>
    //     <input className="name-input" type="text" />
    //   </div>
    // </div>
    <div className={classes.main}>
      <div className={classes.hero}>
        <label>Name</label>
        <input className="name-input" type="text" />
      </div>
    </div>
  );
}

export default TempTest;
