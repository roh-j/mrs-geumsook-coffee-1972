import styles from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.introduction}>
          <div className={styles.heading}>
            <h2 className="animate__animated animate__fadeIn animate__faster">
              72
            </h2>
            <h3>
              <strong>대한민국</strong> 엄마의 자존심
              <br />
              <strong>금숙씨</strong>가 만들면 다 맛있습니다.
            </h3>
          </div>
          <div
            className={`${styles.description} animate__animated animate__fadeInUp animate__faster`}
          >
            <h4>엄마의 깊은 내공이 담긴 디저트와 음료</h4>
            <p>
              이색적인 디저트로
              <br />
              일반적인 카페와 다른 금숙씨만의 분위기를 만들었습니다.
            </p>
          </div>
        </div>
        <div className={styles.video}></div>
      </div>
      <div className={styles.belt}></div>
    </div>
  );
};

export default Hero;
