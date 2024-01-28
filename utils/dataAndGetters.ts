import { ProductInfo } from "@/types/appTypes";

// prettier-ignore
const products: ProductInfo[] = [
  {
    imgSrc: '/images/fPhone.webp', title: "Iphone 14 (6 GB RAM)", numReviews: 500, numRatings: 4000, avgRating: 4.2,  id: "1", maxPrice: 100000, discountPerc: 20, price: 80000, variant: "128 GB ROM",
    briefDescription: [
      "6 GB RAM | 128 GB ROM | Expandable upto 512 GB",
      "17.04 cm (6.71 inch) Super Retina XDR Display",
      "12MP + 12MP | 12MP Front Camera",
      "A15 Bionic Chip, 6 Core Processor Processor",
      "1 Year Warranty for Phone"
    ],
    moreDetails: {
      images: ['/images/fPhone.webp', '/images/fPhone.webp', '/images/fPhone.webp'],
      Specifications: {
        "General": {
          "In The Box": "Handset, USB-C to Lightning Cable, Documentation",
          "Model Number": "MPVN3HN/A",
          "Model Name": "iPhone 14",
          "Color": "Blue",
          "Browse Type": "Smartphones",
          "SIM Type": "Dual Sim(Nano + eSIM)",
          "Hybrid Sim Slot": "No",
          "Touchscreen": "Yes",
        },
        "Display Features": {
          "Display Size": "15.49 cm (6.1 inch)",
          "Resolution": "2532 x 1170 Pixels",
          "Resolution Type": "Super Retina XDR Display",
          "GPU": "5 Core",
          "Display Type": "Super Retina XDR Display",
          "Other Display Features": "HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 20,00,000:1, Max Brightness: 800 nits, Peak Brightness: 1,200 nits, Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously"
        },
        "Os & Processor Features": {
          "Operating System": "iOS 16",
          "Processor Brand": "Apple",
          "Processor Type": "A15 Bionic Chip, 6 Core Processor",
          "Processor Core": "Hexa Core",
          "Operating Frequency": "5G NR (Bands n1, n2, n3, n5, n7, n8, n12, n20, n25, n26, n28, n30, n38, n40, n41, n48, n53, n66, n70, n77, n78, n79), 4G FDD-LTE (B1, B2, B3, B4, B5, B7, B8, B12, B13, B17, B18, B19, B20, B25, B26, B28, B30, B32, B66), 4G TD-LTE (B34, B38, B39, B40, B41, B42, B46, B48, B53), 3G UMTS/HSPA+/DC-HSDPA (850, 900, 1700/2100, 1900, 2100 MHz), 2G GSM/EDGE (850, 900, 1800, 1900 MHz)"
        }
      }
    }
  },
  {
    imgSrc: '/images/mobile-2.jpeg', title: "Samsung Galaxy S21 (6 GB RAM)", numReviews: 800, numRatings: 6000, avgRating: 4.4,  id: "2",
    maxPrice: 80000,  discountPerc: 37.5, price: 50000, variant: "256 GB ROM",
    briefDescription: [
      "6 GB RAM | 256 GB ROM | Expandable upto 512 GB",
      "17.04 cm (6.71 inch) Super Retina XDR Display",
      "24MP + 24MP | 20MP Front Camera",
      "Exynos | Octa Core | 2.9GHz",
      "1 Year Warranty for Phone"
    ],

    moreDetails: {
      images: ['/images/mobile-2.jpeg', '/images/mobile-2.jpeg', '/images/mobile-2.jpeg'],
      Specifications: {
        General: {
          "In The Box": "Handset, USB-C to Lightning Cable, Documentation",
          "Model Number": "MPVN3HN/A",
          "Model Name": "iPhone 14",
          "Color": "Blue",
          "Browse Type": "Smartphones",
          "SIM Type": "Dual Sim(Nano + eSIM)",
          "Hybrid Sim Slot": "No",
          "Touchscreen": "Yes",
        },
        "Display Features": {
          "Display Size": "15.49 cm (6.1 inch)",
          "Resolution": "2532 x 1170 Pixels",
          "Resolution Type": "Super Retina XDR Display",
          "GPU": "5 Core",
          "Display Type": "Super Retina XDR Display",
          "Other Display Features": "HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 20,00,000:1, Max Brightness: 800 nits, Peak Brightness: 1,200 nits, Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously"
        },
        "Os & Processor Features": {
          "Operating System": "iOS 16",
          "Processor Brand": "Apple",
          "Processor Type": "A15 Bionic Chip, 6 Core Processor",
          "Processor Core": "Hexa Core",
          "Operating Frequency": "5G NR (Bands n1, n2, n3, n5, n7, n8, n12, n20, n25, n26, n28, n30, n38, n40, n41, n48, n53, n66, n70, n77, n78, n79), 4G FDD-LTE (B1, B2, B3, B4, B5, B7, B8, B12, B13, B17, B18, B19, B20, B25, B26, B28, B30, B32, B66), 4G TD-LTE (B34, B38, B39, B40, B41, B42, B46, B48, B53), 3G UMTS/HSPA+/DC-HSDPA (850, 900, 1700/2100, 1900, 2100 MHz), 2G GSM/EDGE (850, 900, 1800, 1900 MHz)"
        }
      }
    }
  },
  {
    imgSrc: '/images/mobile-3.jpeg', title: "OnePlus 10 Pro 5G (8 GB RAM)", numReviews: 1100, numRatings: 7200, avgRating: 4.5, id: "3",
    maxPrice: 60000, discountPerc: 25, price: 45000, variant: "128 GB ROM",
    briefDescription: [
      "8 GB RAM | 128 GB ROM",
      "17.02 cm (6.7 inch) Display",
      "48MP Rear Camera",
      "5000 mAh Battery",
    ],

    moreDetails: {
      images: ['/images/mobile-3.jpeg', '/images/mobile-3.jpeg', '/images/mobile-3.jpeg'],
      Specifications: {
        General: {
          "In The Box": "Handset, USB-C to Lightning Cable, Documentation",
          "Model Number": "MPVN3HN/A",
          "Model Name": "iPhone 14",
          "Color": "Blue",
          "Browse Type": "Smartphones",
          "SIM Type": "Dual Sim(Nano + eSIM)",
          "Hybrid Sim Slot": "No",
          "Touchscreen": "Yes",
        },
        "Display Features": {
          "Display Size": "15.49 cm (6.1 inch)",
          "Resolution": "2532 x 1170 Pixels",
          "Resolution Type": "Super Retina XDR Display",
          "GPU": "5 Core",
          "Display Type": "Super Retina XDR Display",
          "Other Display Features": "HDR Display, True Tone, Wide Colour (P3), Haptic Touch, Contrast Ratio: 20,00,000:1, Max Brightness: 800 nits, Peak Brightness: 1,200 nits, Fingerprint Resistant Oleophobic Coating, Support for Display of Multiple Languages and Characters Simultaneously"
        },
        "Os & Processor Features": {
          "Operating System": "iOS 16",
          "Processor Brand": "Apple",
          "Processor Type": "A15 Bionic Chip, 6 Core Processor",
          "Processor Core": "Hexa Core",
          "Operating Frequency": "5G NR (Bands n1, n2, n3, n5, n7, n8, n12, n20, n25, n26, n28, n30, n38, n40, n41, n48, n53, n66, n70, n77, n78, n79), 4G FDD-LTE (B1, B2, B3, B4, B5, B7, B8, B12, B13, B17, B18, B19, B20, B25, B26, B28, B30, B32, B66), 4G TD-LTE (B34, B38, B39, B40, B41, B42, B46, B48, B53), 3G UMTS/HSPA+/DC-HSDPA (850, 900, 1700/2100, 1900, 2100 MHz), 2G GSM/EDGE (850, 900, 1800, 1900 MHz)"
        }
      }
    }
  },
];

export const getProductsAsynchronously = (): Promise<ProductInfo[]> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(products);
    }, 1000);
  });
};

export const getProductById = (id: string): Promise<ProductInfo> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const prod: ProductInfo = products.find((prod) => prod.id === id);
      res(prod);
    }, 250);
  });
};
