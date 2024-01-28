"use client";

import Carousel from "react-material-ui-carousel";
import CarouselItem from "@/components/CarouselItem/CarouselItem";
import classes from "./page.module.scss";
import "react-horizontal-scrolling-menu/dist/styles.css";
import RowScroller from "@/components/RowScroller/RowScroller";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext/AuthContext";

export default function Home() {
  const { authToken, setAuthToken } = useContext(AuthContext);
  console.log({ authToken });
  const items = [
    {
      title: "Title 1",
      desc: "Description 1",
      imgSrc: "/images/banner-8.jpg",
    },
    {
      title: "Title 2",
      desc: "Description 2",
      imgSrc: "/images/banner-3.jpeg",
    },
    {
      title: "Title 3",
      desc: "Description 3",
      imgSrc: "/images/banner-4.jpeg",
    },
  ];

  const RenderCarousel = () => {
    return (
      <Carousel
        className={classes.carouselBox}
        indicatorContainerProps={{
          className: classes.indicatorContainer,
        }}
      >
        {items.map((item, idx) => (
          <CarouselItem key={idx.toString()} item={item} />
        ))}
      </Carousel>
    );
  };

  const fashionItems = [
    { src: "/images/shoe-1.jpeg" },
    { src: "/images/shoe-2.jpeg" },
    { src: "/images/shoe-3.jpeg" },
    { src: "/images/jeans-1.jpeg" },
    { src: "/images/jeans-2.jpeg" },
    { src: "/images/goggles-1.jpeg" },
    { src: "/images/shoe-1.jpeg" },
    { src: "/images/jeans-2.jpeg" },
    { src: "/images/shoe-2.jpeg" },
    { src: "/images/jeans-1.jpeg" },
  ];

  const electronicItems = [
    { src: "/images/laptop-3.jpeg" },
    { src: "/images/laptop-5.jpeg" },
    { src: "/images/smart-watch.jpeg" },
    { src: "/images/smart-watch-3.jpeg" },
    { src: "/images/mobile-4.jpeg" },
    { src: "/images/laptop-3.jpeg" },
    { src: "/images/smart-watch.jpeg" },
    { src: "/images/mobile-2.jpeg" },
    { src: "/images/laptop-5.jpeg" },
    { src: "/images/mobile-4.jpeg" },
  ];

  return (
    <main className={classes.main}>
      <div className={classes.carouselCont}>
        <RenderCarousel />
      </div>

      <div className={classes.productsCont}>
        <RowScroller items={fashionItems} />
      </div>

      <div className={classes.productsCont}>
        <RowScroller items={electronicItems} />
      </div>

      {/* <TempTest /> */}
    </main>
  );
}
