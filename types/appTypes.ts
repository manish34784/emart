export type ProductInfo = {
  imgSrc: string;
  title: string;
  numReviews: number;
  numRatings: number;
  avgRating: number;
  id: string;
  maxPrice: number;
  discountPerc: number;
  price: number;
  variant: string;
  briefDescription: string[];
  moreDetails: {
    images: string[];
    Specifications: {
      General: {
        "In The Box": string;
        "Model Number": string;
        "Model Name": string;
        Color: string;
        "Browse Type": string;
        "SIM Type": string;
        "Hybrid Sim Slot": string;
        Touchscreen: string;
      };
      "Display Features": {
        "Display Size": string;
        Resolution: string;
        "Resolution Type": string;
        GPU: string;
        "Display Type": string;
        "Other Display Features": string;
      };
      "Os & Processor Features": {
        "Operating System": string;
        "Processor Brand": string;
        "Processor Type": string;
        "Processor Core": string;
        "Operating Frequency": string;
      };
    };
  };
};
