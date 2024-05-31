"use client";

import AOS from "aos";
import Image from "next/image";
import styles from "./differentiation.module.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useEffect } from "react";

const MENU_IMAGES = [
  "/menu-tteokbokki.png",
  "/menu-jjajang-tteokbokki.png",
  "/menu-abalone-porridge.png",
  "/menu-red-bean-porridge.png",
  "/menu-naengmyeon.png",
  "/menu-bibimn-naengmyeon.png",
  "/menu-steamed-corn.png",
  "/menu-drug-corn.png",
  "/menu-rice-cake-skewers.png",
];

const Differentiation = () => {
  const menus = [
    ...MENU_IMAGES,
    ...MENU_IMAGES,
    ...MENU_IMAGES,
    ...MENU_IMAGES,
    ...MENU_IMAGES,
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h4 data-aos="fade-up">
          일반적인 배달카페와
          <br />
          <strong>금숙씨커피</strong>의 <strong>다른점</strong>은{" "}
          <strong>이색적인 디저트</strong>입니다.
        </h4>
        <p data-aos="fade-up" data-aos-delay="300">
          <strong>카</strong>페에서 <strong>식사</strong>를 한다면,{" "}
          <strong>카</strong>페에서 <strong>냉면</strong>을 판다면,
          <strong>카</strong>페에서 <strong>찐옥수수</strong>를 판다면,
        </p>
        <p data-aos="zoom-in" data-aos-delay="500">
          작은 상상에서 시작된 이색 디저트,
          <br />
          꾸준한 메뉴 연구 그리고 개발이 있기에 금숙씨는 더 성장합니다.
        </p>
      </div>
      <div className={styles.carousel}>
        <Splide
          options={{
            type: "loop",
            autoWidth: true,
            arrows: false,
            pagination: false,
            autoScroll: {
              pauseOnHover: false,
            },
          }}
          extensions={{ AutoScroll }}
        >
          {menus.map((menu, index) => (
            <SplideSlide key={index}>
              <Image src={menu} alt="" width={0} height={0} sizes="100vw" />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Differentiation;
