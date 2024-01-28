import React, { useEffect, useState } from "react";
import classes from "./CartItem.module.scss";
import Image from "next/image";
import ItemUnitsControl from "../ItemUnitsControl/ItemUnitsControl";
import { StoreItemType } from "@/redux/reduxTypes";
import { useDispatch } from "react-redux";
import { removeItem, updateItemCount } from "@/redux/actionCreators";
import { ProductInfo } from "@/types/appTypes";
import PriceBox from "../PriceBox/PriceBox";

type CartItemProps = {
  item: StoreItemType;
  itemDetails: ProductInfo;
};

interface CartItemComp {
  (props: CartItemProps): JSX.Element;
}

const CartItem: CartItemComp = (props) => {
  const { item, itemDetails } = props;
  const dispatch = useDispatch();

  const handleUpdateCount = (change: number) => {
    dispatch(updateItemCount(item.id, change));
  };

  const handleRemoveItem = () => {
    dispatch(removeItem(item.id));
  };

  if (!itemDetails || !item) return <></>;

  const { title, imgSrc, variant, discountPerc, maxPrice, price } = itemDetails;

  return (
    <div className={classes.itemCont}>
      <div className={classes.imageAndUnitsCont}>
        <Image
          src={imgSrc}
          width={90}
          height={135}
          alt="product-image"
          className={classes.itemImage}
        />

        <ItemUnitsControl count={item.units} updateCount={handleUpdateCount} />
      </div>

      <div className={classes.itemDetailsCont}>
        <div className={classes.itemDetails}>
          <div>
            <p className={classes.itemTitle}>{title}</p>
            <span className={classes.subTitle}>
              ROM:&nbsp;{variant.slice(0, -4)}
            </span>

            <p className={classes.deliveryText}>Delivery in 4 days</p>
          </div>

          <div>
            <PriceBox
              contClassName={classes.priceBoxCont}
              priceTextOuterClass={classes.priceText}
              discountTextOuterClass={classes.discountText}
              priceDetails={{ discountPerc, maxPrice, price }}
            />
          </div>
        </div>

        <div className={classes.actionsCont}>
          <button className={classes.removeBtn} onClick={handleRemoveItem}>
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
