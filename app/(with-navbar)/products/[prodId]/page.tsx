"use client";

import { ProductInfo } from "@/types/appTypes";
import { getProductById } from "@/utils/dataAndGetters";
import React, { useEffect, useState } from "react";
import classes from "./page.module.scss";
import Image from "next/image";
import ProdTitleAndRatings from "@/components/ProdTitleAndRatings/ProdTitleAndRatings";
import PriceBox from "@/components/PriceBox/PriceBox";
import AppButton from "@/components/AppButton/AppButton";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType } from "@/redux/reduxTypes";
import { addItem } from "@/redux/actionCreators";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader/Loader";

interface ProductDetailsProps {
  params: {
    prodId: string;
  };
}

function ProductDetails(props: ProductDetailsProps) {
  const { params } = props;
  const items = useSelector((st: RootStateType) => st.items);
  const dispatch = useDispatch();
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<ProductInfo>(null);

  useEffect(() => {
    async function getProduct(id: string) {
      const prod: ProductInfo = await getProductById(id);

      setProduct(prod);
      setLoading(false);
    }

    getProduct(params.prodId);
  }, [params.prodId]);

  function isInCart() {
    const itemIdx = items.findIndex((item) => item.id === product.id);
    return itemIdx !== -1;
  }
  const handleAddToCart = () => {
    dispatch(addItem(product.id));
  };
  const handleNavigateToCart = () => {
    router.push("/cart");
  };

  const RenderCoreList = ({ subHeadingKey }: { subHeadingKey: string }) => {
    return (
      <ul className={classes.listCont}>
        {Object.keys(Specifications[subHeadingKey]).map((coreKey) => (
          <li key={coreKey} className={classes.listItem}>
            <span className={classes.coreKeyText}>{coreKey}</span>
            <span className={classes.coreKeyValue}>
              {Specifications[subHeadingKey][coreKey]}
            </span>
          </li>
        ))}
      </ul>
    );
  };

  if (loading) return <Loader />;

  if (!product) {
    return <>Product details cannot be fetched</>;
  }

  // prettier-ignore
  const { title, avgRating, numRatings, numReviews, moreDetails, maxPrice, discountPerc, price } = product;
  const { Specifications, images } = moreDetails;

  return (
    <div className={classes.mainCont}>
      <div className={classes.contentCont}>
        <div className={classes.imgAndBtnCont}>
          <div className={classes.imageCont}>
            <Image
              src={moreDetails.images[0]}
              fill
              alt="product-image"
              objectFit="cover"
              style={{ backgroundColor: "#fff" }}
            />
          </div>

          <AppButton
            title={isInCart() ? "Go To Cart" : "Add To Cart"}
            containerStyles={{
              alignSelf: "center",
              width: "70%",
              padding: "1rem",
            }}
            titleStyle={{ fontWeight: "bold", fontSize: "16px" }}
            onClick={isInCart() ? handleNavigateToCart : handleAddToCart}
          />
        </div>

        <div className={classes.textDescCont}>
          <ProdTitleAndRatings
            partialInfo={{ title, avgRating, numRatings, numReviews }}
          />
          <PriceBox
            contClassName={classes.priceBoxOvverideClass}
            priceDetails={{
              discountPerc,
              maxPrice,
              price,
            }}
          />

          <div className={classes.specsCont}>
            <div className={classes.specsSection}>
              <span className={classes.headText}>Specifications</span>
            </div>

            {Object.keys(Specifications).map((key) => (
              <div key={key} className={classes.specsSection}>
                <span className={classes.subHeaderText}>{key}</span>
                <RenderCoreList subHeadingKey={key} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
