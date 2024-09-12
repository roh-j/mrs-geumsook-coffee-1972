import styles from "./president.module.css";

const President = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3 data-aos="fade-up">
          젊은대표가 직접 <strong>관리하는 가맹점</strong>
          <br />
          <strong>점주님과 상생</strong> 프랜차이즈
        </h3>
        <p data-aos="fade-up" data-aos-delay="300">
          항상 정직한 모습 열정있는 모습 상생하는 마음으로 늘 점주님과
          함께하겠습니다.
        </p>
        <p
          style={{ marginTop: "30px" }}
          data-aos="zoom-in"
          data-aos-delay="500"
        >
          가맹점 전부터 오픈까지 금숙씨커피 젊은대표가 직접 매장을 방문하여
          오픈을 도와드리고 있습니다.
          <br />
          차려놓고 나몰라라 하지 않겠습니다. 점주님께서 항상 안정적인 장사를
          하실 수 있게끔 항상 뒷받침하겠습니다.
        </p>
      </div>
    </div>
  );
};

export default President;
