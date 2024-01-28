"use client";

import React, { useEffect, useState } from "react";
import classes from "./page.module.scss";
import ProductTeaser from "../../../components/ProductTeaser/ProductTeaser";
import { getProductsAsynchronously } from "@/utils/dataAndGetters";
import { ProductInfo } from "@/types/appTypes";
import Loader from "@/components/Loader/Loader";

const ProductList = () => {
  const [products, setProducts] = useState<ProductInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getProducts() {
      const products: ProductInfo[] = await getProductsAsynchronously();
      try {
        setProducts(products);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }

    getProducts();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className={classes.mainContainer}>
      <div className={classes.productsCont}>
        {products.map((prod) => (
          <ProductTeaser key={prod.id} prodInfo={prod} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
