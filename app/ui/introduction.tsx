"use client";

import AOS from "aos";
import styles from "./introduction.module.css";
import { useEffect } from "react";

const Introduction = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.wrapper}>
      <p className={styles.container} data-aos="fade-up">
        강원도 출신 <strong>1972년생인 금숙씨</strong>는
        <br />
        <strong>커피</strong>와 <strong>디저트</strong>에 대한{" "}
        <strong>애정</strong>이 있었습니다.
      </p>
    </div>
  );
};

export default Introduction;
