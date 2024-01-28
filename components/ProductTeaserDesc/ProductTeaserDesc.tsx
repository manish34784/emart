import React from "react";
import classes from "./ProductTeaserDesc.module.scss";
import { ProductInfo } from "@/types/appTypes";
import ProdTitleAndRatings from "../ProdTitleAndRatings/ProdTitleAndRatings";

type ProdDesc = Omit<ProductInfo, "imgSrc" | "price">;

interface TeaserDescProps {
  prodDesc: ProdDesc;
}

function ProductTeaserDesc(props: TeaserDescProps) {
  const { prodDesc } = props;
  const { title, numReviews, numRatings, avgRating, briefDescription } =
    prodDesc;
  return (
    <div className={classes.descCont}>
      <ProdTitleAndRatings
        partialInfo={{ title, avgRating, numRatings, numReviews }}
      />

      <ul className={classes.listCont}>
        {briefDescription.map((bDesc, idx) => (
          <li key={idx.toString()} className={classes.listItem}>
            {bDesc}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductTeaserDesc;
