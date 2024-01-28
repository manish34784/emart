import React from "react";
import classes from "./ProductTeaser.module.scss";
import Image from "next/image";
import ProductTeaserDesc from "../ProductTeaserDesc/ProductTeaserDesc";
import PriceBox from "../PriceBox/PriceBox";
import Link from "next/link";
import { ProductInfo } from "@/types/appTypes";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/redux/actionCreators";
import { RootStateType } from "@/redux/reduxTypes";
import { useRouter } from "next/navigation";

interface ProductTeaser {
  prodInfo: ProductInfo;
}

function ProductTeaser(props: ProductTeaser) {
  const { prodInfo } = props;
  const { discountPerc, maxPrice, price, id } = prodInfo;
  // console.log("prodInfo: ", prodInfo);

  const items = useSelector((st: RootStateType) => st.items);
  const dispatch = useDispatch();
  const router = useRouter();

  function isInCart() {
    const itemIdx = items.findIndex((item) => item.id === id);
    return itemIdx !== -1;
  }

  const handleAddToCart = () => {
    dispatch(addItem(id));
  };

  const handleNavigateToCart = () => {
    router.push("/cart");
  };

  return (
    <div className={classes.productRow}>
      <Link href={`products/${id}`} className={classes.linkCont}>
        <Image
          src={prodInfo.imgSrc}
          height={200}
          width={150}
          alt="Product Image"
          className={classes.prodImage}
        />
        <ProductTeaserDesc prodDesc={prodInfo} />
      </Link>
      <PriceBox
        priceDetails={{ discountPerc, maxPrice, price }}
        showBtn
        isInCart={isInCart()}
        onAddToCart={handleAddToCart}
        onGoToCart={handleNavigateToCart}
      />
    </div>
  );
}

export default ProductTeaser;
