import styles from "./sales.module.css";

const Sales = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div
          className={styles.mobileTop}
          data-aos-offset="200"
          data-aos="fade-up"
        >
          <h4>
            24년 7월 달 일일 매출{" "}
            <strong>
              신기록{" "}
              <span
                className="purecounter"
                data-purecounter-duration="1"
                data-purecounter-start="0"
                data-purecounter-end="12322180"
                data-purecounter-once="false"
                data-purecounter-separator=","
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
              월 매출 2억원 달성!!!
            </strong>
          </h3>
        </div>
        <div className={styles.container}>
          <div className={styles.chart} data-aos-offset="200" data-aos="">
            <div className={styles.sticker}>
              <p className="animate__animated animate__pulse animate__infinite">
                아메리카노
                <br />
                11,739잔
                <br />
                판매
              </p>
            </div>
            <div className={styles.strong}>230,435,710원</div>
            <ul>
              <li>
                <span className={styles.amount}>
                  <span
                    className="purecounter"
                    data-purecounter-duration="1"
                    data-purecounter-start="0"
                    data-purecounter-end="94888490"
                    data-purecounter-once="false"
                    data-purecounter-separator=","
                  >
                    0
                  </span>
                  원
                </span>
                <p className={styles.bar}></p>
                <p className={styles.label}>24'3월</p>
              </li>
              <li>
                <span className={styles.amount}>
                  <span
                    className="purecounter"
                    data-purecounter-duration="1.1"
                    data-purecounter-start="0"
                    data-purecounter-end="104313420"
                    data-purecounter-once="false"
                    data-purecounter-separator=","
                  >
                    0
                  </span>
                  원
                </span>
                <p className={styles.bar}></p>
                <p className={styles.label}>4월</p>
              </li>
              <li>
                <span className={styles.amount}>
                  <span
                    className="purecounter"
                    data-purecounter-duration="1.2"
                    data-purecounter-start="0"
                    data-purecounter-end="144966770"
                    data-purecounter-once="false"
                    data-purecounter-separator=","
                  >
                    0
                  </span>
                  원
                </span>
                <p className={styles.bar}></p>
                <p className={styles.label}>5월</p>
              </li>
              <li>
                <span className={styles.amount}>
                  <span
                    className="purecounter"
                    data-purecounter-duration="1.3"
                    data-purecounter-start="0"
                    data-purecounter-end="200700770"
                    data-purecounter-once="false"
                    data-purecounter-separator=","
                  >
                    0
                  </span>
                  원
                </span>
                <p className={styles.bar}></p>
                <p className={styles.label}>6월</p>
              </li>
              <li>
                <p className={styles.bar} style={{ opacity: 0.5 }}></p>
                <p className={styles.label}>7월</p>
              </li>
            </ul>
          </div>
          <div
            className={styles.description}
            data-aos-offset="200"
            data-aos="fade-up"
          >
            <h4>
              24년 7월 달 일일 매출{" "}
              <strong>
                신기록{" "}
                <span
                  className="purecounter"
                  data-purecounter-duration="1"
                  data-purecounter-start="0"
                  data-purecounter-end="12322180"
                  data-purecounter-once="false"
                  data-purecounter-separator=","
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
                월 매출 2억원 달성!!!
              </strong>
            </h3>
            <p>
              8평의 기적 수원의 전설이 되다.
              <br />
              <br />
              + 금숙씨커피는 비수기가 없습니다. 365일 내내 성수기
              <br />
              + 꾸준하고, 안전하게 매출이 성장하는 브랜드
              <br />+ 디저트와 음료의 만남! <u>평균 객단가 15,929원</u>
              <br />+ 수원본점 매장 임대료 <u>8평 70만원</u>
            </p>
          </div>
        </div>
        <div
          className={styles.mobileBottom}
          data-aos-offset="200"
          data-aos="fade-up"
        >
          <p>
            8평의 기적 수원의 전설이 되다.
            <br />
            <br />
            + 금숙씨커피는 비수기가 없습니다. 365일 내내 성수기
            <br />
            + 꾸준하고, 안전하게 매출이 성장하는 브랜드
            <br />+ 디저트와 음료의 만남! <u>평균 객단가 15,929원</u>
            <br />+ 수원본점 매장 임대료 <u>8평 70만원</u>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sales;
