"use client";

import styles from "./main-home.module.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const MainHome = () => {
  return (
    <Splide
      options={{
        type: "loop",
        autoWidth: true,
        gap: 30,
        arrows: false,
        pagination: false,
      }}
      extensions={{ AutoScroll }}
    >
      <SplideSlide>
        <div className={styles.item}>아이템 1</div>
      </SplideSlide>
      <SplideSlide>
        <div className={styles.item}>아이템 2</div>
      </SplideSlide>
      <SplideSlide>
        <div className={styles.item}>아이템 3</div>
      </SplideSlide>
    </Splide>
  );
};

export default MainHome;
