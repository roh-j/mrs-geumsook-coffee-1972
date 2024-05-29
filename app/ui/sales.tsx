"use client";

import AOS from "aos";
import styles from "./sales.module.css";
import { useEffect } from "react";

const Sales = () => {
  const initPureCounter = async () => {
    // @ts-ignore
    const { default: PureCounter } = await import("@srexi/purecounterjs");

    new PureCounter();
  };

  useEffect(() => {
    AOS.init();
    initPureCounter();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.chart} data-aos="">
          <div className={styles.emphasis}>
            <p className="animate__animated animate__pulse animate__infinite">
              월별 매출
              <br />
              증가율
            </p>
          </div>
          <div className={styles.strong}>104313420</div>
          <ul>
            <li>
              <span className={styles.amount}>71,417,580</span>
              <p className={styles.bar}></p>
              <p className={styles.label}>23'12월</p>
            </li>
            <li>
              <span className={styles.amount}>71,417,580</span>
              <p className={styles.bar}></p>
              <p className={styles.label}>23'12월</p>
            </li>
            <li>
              <span className={styles.amount}>71,417,580</span>
              <p className={styles.bar}></p>
              <p className={styles.label}>23'12월</p>
            </li>
            <li>
              <span className={styles.amount}>71,417,580</span>
              <p className={styles.bar}></p>
              <p className={styles.label}>23'12월</p>
            </li>
            <li>
              <p className={styles.bar}></p>
              <p className={styles.label}>23'12월</p>
            </li>
          </ul>
        </div>
        <div
          className={styles.description}
          data-aos="fade-up"
          data-aos-delay="1500"
        >
          <h4>
            24년 5월 달 일일매출{" "}
            <strong>
              신기록{" "}
              <span
                className="purecounter"
                data-purecounter-start="0"
                data-purecounter-end="6842000"
                data-purecounter-once="false"
                data-purecounter-separator=","
                data-purecounter-duration="3.5"
              >
                0
              </span>
              원
            </strong>
          </h4>
          <h3>
            금숙씨커피본점 <strong>8평 매장</strong>
            <br />
            <strong className="animate__animated animate__flash animate__slower animate__infinite">
              월 매출 1억원 돌파!!!
            </strong>
          </h3>
          <p>
            8평 매장에서 말도 안되는 매출을 만들었습니다.
            <br />
            + 꾸준하고, 안전하게 매출이 성장하는 브랜드
            <br />+ 수원본점 임대로 70만원
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sales;
