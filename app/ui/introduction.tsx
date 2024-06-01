import styles from "./introduction.module.css";

const Introduction = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p data-aos-offset="200" data-aos="fade-up">
          강원도 출신 <strong>1972년생인 금숙씨</strong>는
          <br />
          <strong>커피</strong>와 <strong>디저트</strong>에 대한{" "}
          <strong>애정</strong>이 있었습니다.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
