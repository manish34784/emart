import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        height: "80vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        src={"/images/loader200.gif"}
        height={80}
        width={80}
        alt="loading..."
      />
    </div>
  );
};

export default Loader;
