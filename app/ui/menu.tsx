import styles from "./menu.module.css";
import Image from "next/image";

const Menu = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3>추천메뉴</h3>
        <ul className={styles.bestItems}>
          <li>
            <div className={styles.sticker}>BEST</div>
            <Image
              src="/menu-best-americano.png"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
            <h5>아메리카노</h5>
          </li>
          <li>
            <div className={styles.sticker}>BEST</div>
            <Image
              src="/menu-best-pomegranate-iced-tea.png"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
            <h5>아메리카노</h5>
          </li>
          <li>
            <div className={styles.sticker}>BEST</div>
            <Image
              src="/menu-best-chamomile-tea.png"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
            <h5>아메리카노</h5>
          </li>
        </ul>
        <div className={styles.selection}>
          <ul>
            <li>
              <i className="fa-regular fa-square"></i> 1L 대용량
            </li>
            <li>
              <i className="fa-regular fa-square"></i> 커피
            </li>
            <li>
              <i className="fa-regular fa-square"></i> 콜드브루
            </li>
            <li>
              <i className="fa-regular fa-square"></i> 라떼
            </li>
            <li>
              <i className="fa-regular fa-square"></i> 생과일주스
            </li>
            <li>
              <i className="fa-regular fa-square"></i> 에이드
            </li>
            <li>
              <i className="fa-regular fa-square"></i> 향긋티
            </li>
            <li>
              <i className="fa-regular fa-square"></i> 스무디
            </li>
            <li>
              <i className="fa-regular fa-square"></i> 떡볶이
            </li>
            <li>
              <i className="fa-regular fa-square"></i> 분식
            </li>
            <li>
              <i className="fa-regular fa-square"></i> 죽
            </li>
            <li>
              <i className="fa-regular fa-square"></i> 볶음밥
            </li>
            <li>
              <i className="fa-regular fa-square"></i> 눈꽃빙수
            </li>
            <li>
              <i className="fa-regular fa-square"></i> 디저트
            </li>
          </ul>
        </div>
        <ul className={styles.items}>
          <li>
            <Image
              src="/menu-best-americano.png"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
            <h5>아메리카노</h5>
          </li>
          <li>
            <Image
              src="/menu-best-americano.png"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
            <h5>아메리카노</h5>
          </li>
          <li>
            <Image
              src="/menu-best-americano.png"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
            <h5>아메리카노</h5>
          </li>
          <li>
            <Image
              src="/menu-best-americano.png"
              alt=""
              width={0}
              height={0}
              sizes="100vw"
            />
            <h5>아메리카노</h5>
          </li>
        </ul>
        <p>
          <button type="button" className={styles.button}>
            + MORE
          </button>
        </p>
      </div>
    </div>
  );
};

export default Menu;
