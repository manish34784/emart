"use client";

import React, { useEffect, useMemo, useState } from "react";
import classes from "./page.module.scss";
import { ProductInfo } from "@/types/appTypes";
import { useSelector } from "react-redux";
import { RootStateType } from "@/redux/reduxTypes";
import CartItem from "@/components/CartItem/CartItem";
import { getProductById } from "@/utils/dataAndGetters";
import CartPriceSection from "@/components/CartPriceSection/CartPriceSection";
import Loader from "@/components/Loader/Loader";

type FullProductInfo = ProductInfo & { units: number };

const Cart = () => {
  const { items: storeItems } = useSelector((st: RootStateType) => st);

  const [loading, setLoading] = useState<boolean>(true);
  const [detailedItems, setDetailedItems] = useState<ProductInfo[]>(null);

  const priceObj = useMemo(() => {
    let maxCost = 0;
    let finalCost = 0;
    if (detailedItems) {
      detailedItems.forEach(({ maxPrice, price, id }) => {
        const item = storeItems.find((it) => it.id === id);
        if (item) {
          maxCost += maxPrice * item.units;
          finalCost += price * item.units;
        }
      });
    }
    return { maxCost, finalCost };
  }, [storeItems, detailedItems]);

  useEffect(() => {
    async function getItems() {
      const itemsProms: Promise<ProductInfo>[] = storeItems.map((item) =>
        getProductById(item.id)
      );
      setLoading(true);
      try {
        const detailedList: ProductInfo[] = await Promise.all(itemsProms);
        setDetailedItems(detailedList);
        setLoading(false);
      } catch (err) {
        console.log("Error fetching product detials");
        setDetailedItems([]);
        setLoading(false);
      }
    }

    getItems();
  }, [storeItems.length]);

  const renderItemsDetails = () => {
    return detailedItems.length === 0 ? (
      <div className={classes.listEmptyCont}>
        <h2>No Items in cart</h2>
      </div>
    ) : (
      detailedItems.map((dItem) => {
        const storeItem = storeItems.find((it) => it.id === dItem.id);
        return <CartItem key={dItem.id} itemDetails={dItem} item={storeItem} />;
      })
    );
  };

  return loading || storeItems.length !== detailedItems.length ? (
    <Loader />
  ) : (
    <div className={classes.mainCont}>
      <div className={classes.container}>
        <div className={classes.itemsCont}>
          <span className={classes.orderItemsHeading}>Order Items</span>
          <div className={classes.separator} />

          {renderItemsDetails()}
        </div>
        <CartPriceSection priceObj={priceObj} numItems={storeItems.length} />
      </div>
    </div>
  );
};

export default Cart;
