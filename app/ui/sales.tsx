import styles from "./sales.module.css";
import { MappedData } from "./sales-wrapper";

interface SalesProps {
  data: MappedData;
}

const Sales = (props: SalesProps) => {
  const { data } = props;

  return (
    <div className={styles.wrapper}>
      <div>
        <div className={styles.mobileTop} data-aos="fade-up">
          <h4>
            {data.daily_sales_label}{" "}
            <strong>
              신기록{" "}
              <span
                className="purecounter"
                data-purecounter-duration="1"
                data-purecounter-start="0"
                data-purecounter-end={data.daily_sales_amount}
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
              {data.monthly_sales_label}
            </strong>
          </h3>
        </div>
        <div className={styles.container}>
          <div className={styles.chart} data-aos="">
            <div className={styles.sticker}>
              <p className="animate__animated animate__pulse animate__infinite">
                {data.graph_label_5_emphasis}
              </p>
            </div>
            <div className={styles.strong}>
              {Number(data.graph_amount_5).toLocaleString()}원
            </div>
            <ul>
              <li>
                <span className={styles.amount}>
                  <span
                    className="purecounter"
                    data-purecounter-duration="1"
                    data-purecounter-start="0"
                    data-purecounter-end={data.graph_amount_1}
                    data-purecounter-once="false"
                    data-purecounter-separator=","
                  >
                    0
                  </span>
                  원
                </span>
                <p
                  className={styles.bar}
                  style={{
                    height: `${
                      (Number(data.graph_amount_1) /
                        Number(data.graph_amount_5)) *
                      100
                    }%`,
                  }}
                ></p>
                <p className={styles.label}>{data.graph_label_1}</p>
              </li>
              <li>
                <span className={styles.amount}>
                  <span
                    className="purecounter"
                    data-purecounter-duration="1.1"
                    data-purecounter-start="0"
                    data-purecounter-end={data.graph_amount_2}
                    data-purecounter-once="false"
                    data-purecounter-separator=","
                  >
                    0
                  </span>
                  원
                </span>
                <p
                  className={styles.bar}
                  style={{
                    height: `${
                      (Number(data.graph_amount_2) /
                        Number(data.graph_amount_5)) *
                      100
                    }%`,
                  }}
                ></p>
                <p className={styles.label}>{data.graph_label_2}</p>
              </li>
              <li>
                <span className={styles.amount}>
                  <span
                    className="purecounter"
                    data-purecounter-duration="1.2"
                    data-purecounter-start="0"
                    data-purecounter-end={data.graph_amount_3}
                    data-purecounter-once="false"
                    data-purecounter-separator=","
                  >
                    0
                  </span>
                  원
                </span>
                <p
                  className={styles.bar}
                  style={{
                    height: `${
                      (Number(data.graph_amount_3) /
                        Number(data.graph_amount_5)) *
                      100
                    }%`,
                  }}
                ></p>
                <p className={styles.label}>{data.graph_label_3}</p>
              </li>
              <li>
                <span className={styles.amount}>
                  <span
                    className="purecounter"
                    data-purecounter-duration="1.3"
                    data-purecounter-start="0"
                    data-purecounter-end={data.graph_amount_4}
                    data-purecounter-once="false"
                    data-purecounter-separator=","
                  >
                    0
                  </span>
                  원
                </span>
                <p
                  className={styles.bar}
                  style={{
                    height: `${
                      (Number(data.graph_amount_4) /
                        Number(data.graph_amount_5)) *
                      100
                    }%`,
                  }}
                ></p>
                <p className={styles.label}>{data.graph_label_4}</p>
              </li>
              <li>
                <p
                  className={styles.bar}
                  style={{
                    opacity: 0.5,
                    height: `${
                      (Number(data.graph_amount_5) /
                        Number(data.graph_amount_5)) *
                      100
                    }%`,
                  }}
                ></p>
                <p className={styles.label}>{data.graph_label_5}</p>
              </li>
            </ul>
          </div>
          <div className={styles.description} data-aos="fade-up">
            <h4>
              {data.daily_sales_label}{" "}
              <strong>
                신기록{" "}
                <span
                  className="purecounter"
                  data-purecounter-duration="1"
                  data-purecounter-start="0"
                  data-purecounter-end={data.daily_sales_amount}
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
                {data.monthly_sales_label}
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
        <div className={styles.mobileBottom} data-aos="fade-up">
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
