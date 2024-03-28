"use client";

import AOS from "aos";
import styles from "./main-home.module.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect } from "react";
import "@splidejs/react-splide/css";
import "aos/dist/aos.css";

const MainHome = () => {
  const initPureCounter = async () => {
    // @ts-ignore
    const { default: PureCounter } = await import("@srexi/purecounterjs");

    new PureCounter();
  };

  useEffect(() => {
    initPureCounter();
    AOS.init();
  }, []);

  return (
    <>
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
      <div
        style={{ width: 100, height: 800, backgroundColor: "red" }}
        data-aos="fade-up"
      >
        <span
          className="purecounter"
          data-purecounter-start="0"
          data-purecounter-end="30000"
          data-purecounter-once="false"
          data-purecounter-separator=","
        >
          0
        </span>
      </div>
      <div
        style={{ width: 100, height: 800, backgroundColor: "yellow" }}
        data-aos="flip-left"
      ></div>
      <div
        style={{ width: 100, height: 800, backgroundColor: "red" }}
        data-aos="flip-right"
      ></div>
    </>
  );
};

export default MainHome;
