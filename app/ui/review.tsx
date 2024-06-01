"use client";

import Image from "next/image";
import styles from "./review.module.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";

const REVIEW_IMAGES = [
  "/review-1.png",
  "/review-2.png",
  "/review-3.png",
  "/review-4.png",
  "/review-5.png",
  "/review-6.png",
];

const Review = () => {
  const reviews = [
    ...REVIEW_IMAGES,
    ...REVIEW_IMAGES,
    ...REVIEW_IMAGES,
    ...REVIEW_IMAGES,
    ...REVIEW_IMAGES,
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3 data-aos-offset="200" data-aos="fade-up">
          빠르고 맛있게 - !<br />
          <strong>금숙씨커피</strong>의 철학으로 빛낸 성과
        </h3>
        <p data-aos-offset="200" data-aos="zoom-in" data-aos-delay="200">
          100% 고객님들이 직접 남겨주신 후기입니다.
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
          {reviews.map((review, index) => (
            <SplideSlide key={index}>
              <Image src={review} alt="" width={0} height={0} sizes="100vw" />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Review;
