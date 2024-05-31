import Image from "next/image";
import styles from "./promotion.module.css";

const Promotion = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h3>
          금숙씨커피 <span>오픈</span> 프로모션
        </h3>
        <div className={styles.emphasis}>
          <p>처음 오픈하시는 점주님들 부담을 덜어드리겠습니다!</p>
        </div>
        <div className={styles.box}>
          <h4 className="animate__animated animate__pulse animate__slower animate__infinite">
            <Image
              src="/promotion-benefit-wing-left.png"
              alt=""
              width={68}
              height={71}
            />
            초대박 한정혜택
            <Image
              src="/promotion-benefit-wing-right.png"
              alt=""
              width={68}
              height={71}
            />
          </h4>
          <ul className={styles.benefit}>
            <li>
              <div className={styles.badge}>1</div>
              <h5>창업비</h5>
            </li>
            <li>
              <div className={styles.badge}>2</div>
            </li>
            <li>
              <div className={styles.badge}>3</div>
            </li>
            <li>
              <div className={styles.badge}>4</div>
            </li>
            <li>
              <div className={styles.badge}>5</div>
            </li>
            <li>
              <div className={styles.badge}>6</div>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.darkWrapper}>
        <div className={styles.darkContainer}>
          <h3>
            금숙씨커피1972는 점포 개설의 속도가 아닌 방향에 초점을 맞추어
            <br />
            반드시 성공하실 수 있도록{" "}
            <strong>'금숙씨 만의 성공 운영 시스템'</strong>을 도입했습니다.
          </h3>
          <table>
            <thead>
              <tr>
                <th colSpan={3}>금숙씨커피1972</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>가맹비</td>
                <td>
                  <strong>
                    <s style={{ color: "#666" }}>6,000,000</s>
                  </strong>
                </td>
                <td>금숙씨커피1972 상표 사용권 부여, 상권조사, 영업권 보장</td>
              </tr>
              <tr>
                <td>계약이행보증금</td>
                <td>
                  <strong>
                    <s style={{ color: "#666" }}>3,000,000</s>
                  </strong>
                </td>
                <td>계약금 대체 및 선착순 면제</td>
              </tr>
              <tr>
                <td>프로모션 혜택</td>
                <td>
                  <strong>
                    <s style={{ color: "#666" }}>1,500,000</s>
                  </strong>
                </td>
                <td>
                  LG 전자레인지, 삼성전자 2구 인덕션, 쿠진와트 크로플기계,
                  키친에이드 반죽기
                </td>
              </tr>
              <tr>
                <td>교육비</td>
                <td>
                  <strong>3,000,000</strong>
                </td>
                <td>본사 및 현장교육 14일</td>
              </tr>
              <tr>
                <td>기본장비</td>
                <td>
                  <strong>35,000,000</strong>
                </td>
                <td>
                  반자동 에스프레소 머신, 자동 그라인더 2대, 대용량 제빙기,
                  블렌더, 자동 메뉴얼 온수기, 업소용 정수필터, 캔 실링기,
                  와플기계, 계란빵 기계, 육수통, 에어프라이기, 빙수기, 대형
                  테이블 냉장/냉동고, 아이스빈
                </td>
              </tr>
              <tr>
                <td>주방집기</td>
                <td>
                  <strong>2,000,000</strong>
                </td>
                <td>카페기물, 주방집기</td>
              </tr>
              <tr>
                <td>디자인 및 홍보물</td>
                <td>
                  <strong>2,000,000</strong>
                </td>
                <td>메뉴판, 배너, 내/외부 홍보물, 메뉴판 거치대</td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  style={{
                    color: "#846655",
                    backgroundColor: "#fff7e3",
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                >
                  기본 구성 소계 52,500,000 → 42,000,000원
                </td>
              </tr>
              <tr>
                <td>인테리어</td>
                <td>
                  <strong>15,000,000 (평당 150만원)</strong>
                </td>
                <td>
                  현장실측, 설계도면비, 목공, 도장, 전기배선, 조명 타일, 설비 등
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  style={{
                    color: "#fff",
                    backgroundColor: "#846655",
                    fontSize: "22px",
                    fontWeight: "bold",
                  }}
                >
                  전체 소계 57,000,000원
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  style={{
                    color: "#fff",
                  }}
                >
                  * 별도공사 제외 (간판, 냉난방기, 전기증설, 철거 등)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Promotion;