import React, { useContext } from "react";
import Image from "next/image";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import classes from "./RowScroller.module.scss";
import Arrow from "../Arrow/Arrow";
import Link from "next/link";
import "./hideScrollbar.css";

function RowScroller({ items }) {
  const LeftArrow = () => {
    const { isFirstItemVisible, getPrevElement, scrollToItem } =
      useContext(VisibilityContext);
    return (
      <Arrow
        side="left"
        disabled={isFirstItemVisible}
        onClick={() => {
          scrollToItem(getPrevElement(), "smooth", "start");
        }}
      />
    );
  };

  const RightArrow = () => {
    const { isLastItemVisible, getNextElement, scrollToItem } =
      useContext(VisibilityContext);
    return (
      <Arrow
        side={"right"}
        disabled={isLastItemVisible}
        onClick={() => {
          scrollToItem(getNextElement(), "smooth", "end");
        }}
      />
    );
  };

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map((prod, idx) => {
        return (
          <Link href={"/"} className={classes.prodLink} key={prod.src}>
            <div className={classes.imgCont}>
              <Image
                className={classes.img}
                src={prod.src}
                alt="shoe"
                height={200}
                width={200}
                style={{ objectFit: "cover" }}
              />
            </div>
            <p className={classes.title}>Product-{idx + 1}</p>
          </Link>
        );
      })}
    </ScrollMenu>
  );
}

export default RowScroller;
