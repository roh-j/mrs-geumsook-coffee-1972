import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ul>
          <li>주식회사 딜리버리브라더</li>
          <li>경기 수원시 권선구 동수원로 289 (2호)</li>
          <li>Tel 1661-3070</li>
          <li>Email gscc1972@naver.com</li>
        </ul>
        <p>
          <a href="mailto:roh-j@naver.com">Developed by Roh Jaehee</a>
          &copy; 72 GEUMSOOK Co. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
