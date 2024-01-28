"use client";

import React from "react";
import classes from "./PriceBox.module.scss";
import AppButton from "../AppButton/AppButton";

interface PriceBoxProps {
  priceDetails: {
    maxPrice: number;
    discountPerc: number;
    price: number;
  };
  contClassName?: string;
  showBtn?: boolean;
  priceTextOuterClass?: string;
  discountTextOuterClass?: string;
  isInCart?: boolean;
  onAddToCart?: () => void;
  onGoToCart?: () => void;
}

const PriceBox = (props: PriceBoxProps) => {
  // prettier-ignore
  const {
    priceDetails, contClassName, showBtn, priceTextOuterClass, discountTextOuterClass, isInCart, onAddToCart, onGoToCart
  } = props;
  const { maxPrice, discountPerc, price } = priceDetails;
  return (
    <div className={`${classes.priceBox} ${contClassName}`}>
      <div>
        <h3 className={`${priceTextOuterClass}`}>Rs&nbsp;{price}</h3>
        <p className={`${classes.discountText} ${discountTextOuterClass}`}>
          <span className={classes.maxPriceText}>{maxPrice}</span>
          {discountPerc}%&nbsp;off
        </p>
      </div>
      {showBtn && (
        <div className={classes.btnCont}>
          <AppButton
            title={isInCart ? "Go To Cart" : "Add To Cart"}
            containerStyles={{ marginTop: "0" }}
            titleStyle={{ fontWeight: "bold" }}
            onClick={isInCart ? onGoToCart : onAddToCart}
          />
        </div>
      )}
    </div>
  );
};

export default PriceBox;
