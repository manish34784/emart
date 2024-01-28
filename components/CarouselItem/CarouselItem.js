import Image from "next/image";
import styles from "./CarouselItem.module.scss";

const CarouselItem = ({ item }) => {
  return (
    <>
      <Image
        alt="sale-banner"
        src={item.imgSrc}
        fill
        style={{ borderRadius: 8 }}
      />
      <div className={styles.itemTextBox}>
        <p>{item.title}</p>
        <p>{item.desc}</p>
      </div>
    </>
  );
};

export default CarouselItem;
