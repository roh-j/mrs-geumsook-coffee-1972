import styles from "./inquiry.module.css";

const Inquiry = () => {
  return (
    <div id="inquiry" className={styles.wrapper}>
      <div className={styles.container}>
        <h4 data-aos-offset="200" data-aos="fade-up">
          금숙씨커피와 함께 하실
        </h4>
        <h3 data-aos-offset="200" data-aos="zoom-in" data-aos-delay="300">
          <strong>가족점</strong> 모집
        </h3>
        <div className={styles.privacy}>
          <i
            className="fa-solid fa-circle-check"
            style={{ color: "#d9d9d9" }}
          ></i>
          개인정보취급방침을 읽었으며 이에 동의합니다.
          <button type="button">전문보기</button>
        </div>
        <h5>
          상담자 정보 <strong>* 필수 입력 항목</strong>
        </h5>
        <ul data-aos-offset="200" data-aos="fade-up" className={styles.form}>
          <li>
            <div className={styles.inputName}>
              <input type="text" placeholder="이름 *" />
            </div>
            <div className={styles.inputPhone}>
              <input type="text" placeholder="010 *" />
              <input type="text" />
              <input type="text" />
            </div>
            <div className={styles.inputLocation}>
              <input type="text" placeholder="창업 희망 지역" />
            </div>
          </li>
          <li>
            <div className={styles.inputSource}>
              <input type="text" placeholder="알게된 경로" />
            </div>
            <div className={styles.inputContent}>
              <textarea placeholder="문의"></textarea>
            </div>
            <button
              type="submit"
              className="animate__animated animate__pulse animate__slower animate__infinite"
            >
              신청하기
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Inquiry;
