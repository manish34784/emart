import React from "react";
import classes from "./ProdTitleAndRatings.module.scss";
import StarIcon from "@mui/icons-material/Star";
import { ProductInfo } from "@/types/appTypes";

type PartialInfoType = Pick<
  ProductInfo,
  "title" | "avgRating" | "numRatings" | "numReviews"
>;

interface ProdTitleAndRatings {
  partialInfo: PartialInfoType;
}

const ProdTitleAndRatings = (props: ProdTitleAndRatings) => {
  const { title, avgRating, numRatings, numReviews } = props.partialInfo;
  return (
    <>
      <p className={classes.title}>{title}</p>
      <div className={classes.ratingsRow}>
        <div className={classes.avgRatingCont}>
          <span className={classes.avgRatingText}>{avgRating}</span>
          <StarIcon sx={{ height: 10, width: 10, color: "#fff" }} />
        </div>

        <p className={classes.ratingsStatsText}>
          {numRatings} Ratings & {numReviews} Reviews
        </p>
      </div>
    </>
  );
};

export default ProdTitleAndRatings;
