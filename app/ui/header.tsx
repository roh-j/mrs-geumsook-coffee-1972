import Image from "next/image";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Image src="/logo.png" alt="" width={173} height={30} />
        <ul className={styles.menu}>
          <li>
            <a href="/">금숙씨1972</a>
          </li>
          <li>
            <a href="/">메뉴소개</a>
          </li>
          <li>
            <a href="/">창업안내</a>
          </li>
          <li>
            <a href="/">창업문의</a>
          </li>
        </ul>
        <a href="/" className={styles.button}>
          가맹문의
        </a>
      </div>
    </div>
  );
};

export default Header;
