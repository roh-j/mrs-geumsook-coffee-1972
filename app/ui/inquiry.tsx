"use client";

import styles from "./inquiry.module.css";
import { pb } from "../shared/connection";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Inquiry = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isVisibleTerms, setIsVisibleTerms] = useState<boolean>(false);
  const [agree, setAgree] = useState<boolean>(false);

  const handleAgree = (newAgree: boolean) => {
    setAgree(newAgree);
  };

  const submitInquiry = async (data: any) => {
    if (!agree) {
      alert("개인 정보 수집을 동의해 주세요.");
      return;
    }

    const payload = {
      name: data.name,
      phone: `${data.phone1}-${data.phone2}-${data.phone3}`,
      location: data.location,
      source: data.source,
      content: data.content,
    };

    const record = await pb.collection("inquiries").create(payload);

    alert("문의가 등록되었습니다.");
    reset();

    setAgree(false);
  };

  return (
    <>
      <div id="inquiry" className={styles.wrapper}>
        <div className={styles.container}>
          <h4 data-aos-offset="200" data-aos="fade-up">
            금숙씨커피와 함께 하실
          </h4>
          <h3 data-aos-offset="200" data-aos="zoom-in" data-aos-delay="300">
            <strong>가족점</strong> 모집
          </h3>
          <div className={styles.privacy}>
            {agree ? (
              <i
                className="fa-solid fa-circle-check"
                style={{ color: "#846655" }}
                onClick={() => {
                  handleAgree(false);
                }}
              ></i>
            ) : (
              <i
                className="fa-solid fa-circle-check"
                style={{ color: "#d9d9d9" }}
                onClick={() => {
                  handleAgree(true);
                }}
              ></i>
            )}
            <span
              onClick={() => {
                handleAgree(!agree);
              }}
            >
              개인정보취급방침을 읽었으며 이에 동의합니다.
            </span>
            <button
              type="button"
              onClick={() => {
                setIsVisibleTerms(true);
              }}
            >
              전문보기
            </button>
          </div>
          <h5>
            상담자 정보 <strong>* 필수 입력 항목</strong>
          </h5>
          <form
            onSubmit={handleSubmit((data) => submitInquiry(data))}
            data-aos-offset="200"
            data-aos="fade-up"
          >
            <ul className={styles.form}>
              <li>
                <div className={styles.inputName}>
                  <input
                    type="text"
                    placeholder="이름 *"
                    {...register("name", { required: true })}
                  />
                </div>
                {errors.name && (
                  <p className={styles.error}>이름을 입력해 주세요.</p>
                )}
                <div className={styles.inputPhone}>
                  <input
                    type="text"
                    placeholder="010 *"
                    {...register("phone1", { required: true })}
                  />
                  <input
                    type="text"
                    {...register("phone2", { required: true })}
                  />
                  <input
                    type="text"
                    {...register("phone3", { required: true })}
                  />
                </div>
                {(errors.phone1 || errors.phone2 || errors.phone3) && (
                  <p className={styles.error}>전화번호를 입력해 주세요.</p>
                )}
                <div className={styles.inputLocation}>
                  <input
                    type="text"
                    placeholder="창업 희망 지역"
                    {...register("location")}
                  />
                </div>
              </li>
              <li>
                <div className={styles.inputSource}>
                  <input
                    type="text"
                    placeholder="알게된 경로"
                    {...register("source")}
                  />
                </div>
                <div className={styles.inputContent}>
                  <textarea
                    placeholder="문의"
                    {...register("content")}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="animate__animated animate__pulse animate__slower animate__infinite"
                >
                  신청하기
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
      {isVisibleTerms && (
        <div className={styles.termsWrapper}>
          <div className={styles.termsContainer}>
            <div className={styles.termsHeader}>
              <button
                type="button"
                onClick={() => {
                  setIsVisibleTerms(false);
                }}
              >
                <i className="fa-solid fa-x"></i>
              </button>
            </div>
            <div className={styles.termsContent}>
              <h3>개인정보 처리방침</h3>
              <p>
                <strong>개인정보 수집/이용 목적:</strong> 창업 상담, 회사 소식
                등의 다양한 정보 제공
              </p>
              <p>
                <strong>수집하는 개인정보의 항목:</strong> 성명, 연락처, 주소,
                이메일
              </p>
              <p>
                ※상담 예약 서비스 이용과정에서 아래와 같은 정보들이 생성되어
                수집될 수 있습니다.
              </p>
              <p>(서비스이용기록, 접속로그, 쿠키, 접속IP정보)</p>
              <hr />
              <p>
                <strong>개인정보의 보유 및 이용기간</strong>
              </p>
              <p>
                - 보존기간은 5년이며, 정보 제공자가 삭제를 요청할 경우 즉시
                파기합니다.
              </p>
              <p>
                - 고객님의 정보는 개인정보 보호법에 따라 보호되며 위의 사항 외에
                별도로 사용하지 않을 것을 약속드립니다.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Inquiry;
