import styles from "./sticky.module.css";

const Sticky = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>
          창업 상담 <span>1577-0000</span>
        </div>
        <div className={styles.form}>
          <div className={styles.inputPhone}>
            <input type="text" placeholder="010 *" />
            <input type="text" />
            <input type="text" />
          </div>
        </div>
        <div className={styles.privacy}>
          <i
            className="fa-regular fa-circle-check"
            style={{ color: "#fff" }}
          ></i>{" "}
          개인정보 수집 동의
        </div>
        <div className={styles.submit}>
          <button type="button">신청하기</button>
        </div>
      </div>
    </div>
  );
};

export default Sticky;
