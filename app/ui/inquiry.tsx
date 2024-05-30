import Image from "next/image";
import styles from "./inquiry.module.css";

const Inquiry = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h4>금숙씨커피와 함께 하실</h4>
        <h3>
          <strong>가족점</strong> 모집
        </h3>
        <div className={styles.privacy}>
          <Image
            src="/icon-checkbox.png"
            alt=""
            width={40}
            height={40}
            className={styles.icon}
          />
          개인정보취급방침을 읽었으며 이에 동의합니다.
          <button type="button">전문보기</button>
        </div>
        <h5>
          상담자 정보 <strong>* 필수 입력 항목</strong>
        </h5>
        <ul className={styles.form}>
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
            <button type="submit">신청하기</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Inquiry;
