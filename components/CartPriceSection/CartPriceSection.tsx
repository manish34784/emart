import React from "react";
import classes from "./CartPriceSection.module.scss";

type PriceDetailsType = {
  priceObj: {
    maxCost: number;
    finalCost: number;
  };
  numItems: number;
};

function CartPriceSection(props: PriceDetailsType) {
  const { priceObj, numItems } = props;
  const { maxCost, finalCost } = priceObj;
  return (
    <div className={classes.priceCont}>
      <span className={classes.orderItemsHeading}>Price Details</span>
      <div className={classes.separator} />
      <div className={classes.priceBreakupCont}>
        <div className={classes.priceRow}>
          <span>Price ({numItems}&nbsp;items)</span>
          <span>{maxCost}</span>
        </div>
        <div className={classes.priceRow}>
          <span>Discount</span>
          <span className={classes.discountText}>
            -&nbsp;{maxCost - finalCost}
          </span>
        </div>

        <div className={classes.finalPriceCont}>
          <span>Total Amount</span>
          <span>{finalCost}</span>
        </div>
      </div>
    </div>
  );
}

export default CartPriceSection;
