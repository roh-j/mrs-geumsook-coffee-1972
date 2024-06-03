import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ul>
          <li>금숙씨커피 000-00-00000</li>
          <li>경기 수원시 권선구 동수원로 289 1층</li>
          <li>Tel 1577-0000</li>
          <li>Email fullpo0207@naver.com</li>
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
