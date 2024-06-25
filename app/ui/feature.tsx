import Image from "next/image";
import styles from "./feature.module.css";

const Feature = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.continer}>
        <div className={styles.left} style={{ marginTop: "0" }}>
          <div
            className={styles.card}
            data-aos-offset="200"
            data-aos="fade-right"
          >
            <div className={styles.thumbnail}>
              <Image
                src="/feature-1.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className={styles.body}>
              <h4 data-aos-offset="200" data-aos="fade-up">
                커피만? NO
                <br />
                흔한 디저트? NO
              </h4>
              <p data-aos-offset="200" data-aos="zoom-in" data-aos-delay="100">
                다양하고 특별한 디저트로 높은 객단가와 금숙씨만의 경쟁력!
              </p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div
            className={styles.card}
            data-aos-offset="200"
            data-aos="fade-left"
          >
            <div className={styles.thumbnail}>
              <Image
                src="/feature-2.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className={styles.body}>
              <h4 data-aos-offset="200" data-aos="fade-up">
                엄청 간.단.해.요
              </h4>
              <p data-aos-offset="200" data-aos="zoom-in" data-aos-delay="100">
                많은 주문이 한번에 몰려 들어와도 절대 당황하지마세요!
                <br />
                초보자도 쉽고 빠르게 만들고 대처할 수 있을만큼 간단합니다.
              </p>
              <p data-aos-offset="200" data-aos="zoom-in" data-aos-delay="200">
                음료 한 잔 평균 조리시간 30초
                <br />
                디저트 메뉴 평균 조리시간 5분 내로 조리완료
              </p>
            </div>
          </div>
        </div>
        <div className={styles.left}>
          <div
            className={styles.card}
            data-aos-offset="200"
            data-aos="fade-right"
          >
            <div className={styles.thumbnail}>
              <Image
                src="/feature-3.png"
                alt=""
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
            <div className={styles.body}>
              <h4 data-aos-offset="200" data-aos="fade-up">
                금숙씨커피는
                <br />
                비수기가 없습니다
              </h4>
              <p data-aos-offset="200" data-aos="zoom-in" data-aos-delay="100">
                카페에는 여름이 성수기라고 하지만 금숙씨에선 365일이
                성수기입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
