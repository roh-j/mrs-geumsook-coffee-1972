"use client";

import styles from "./sticky.module.css";
import { externalPB } from "../shared/connection";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Sticky = () => {
  const { register, handleSubmit, reset } = useForm();

  const [agree, setAgree] = useState<boolean>(false);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  const handleAgree = (newAgree: boolean) => {
    setAgree(newAgree);
  };

  const submitInquiry = async (data: any) => {
    if (!data.phone1 || !data.phone2 || !data.phone3) {
      toast.error("전화번호를 입력해 주세요.");
      return;
    }

    if (!agree) {
      toast.error("개인정보 수집에 동의해야 합니다.");
      return;
    }

    const payload = {
      name: "빠른 상담",
      phone: `${data.phone1}-${data.phone2}-${data.phone3}`,
      location: "",
      source: "",
      content: "",
    };

    const record = await externalPB.collection("inquiries").create(payload);

    toast.success("문의가 등록되었습니다.");
    reset();

    setAgree(false);
  };

  const handleResize = () => {
    if (window.innerWidth >= 1400) {
      setIsLargeScreen(true);
    } else {
      setIsLargeScreen(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.title}>
          창업상담{" "}
          <span className="animate__animated animate__flash animate__slower animate__infinite">
            1661-3070
          </span>
        </div>
        <form
          onSubmit={handleSubmit((data) => {
            if (isLargeScreen) {
              submitInquiry(data);
            } else {
              const el = document.querySelector("#inquiry");
              el?.scrollIntoView();
            }
          })}
          className={styles.form}
        >
          <div className={styles.content}>
            <div className={styles.inputPhone}>
              <input type="text" placeholder="010 *" {...register("phone1")} />
              <input type="text" {...register("phone2")} />
              <input type="text" {...register("phone3")} />
            </div>
          </div>
          <div className={styles.privacy}>
            {agree ? (
              <i
                className="fa-solid fa-circle-check"
                onClick={() => {
                  handleAgree(false);
                }}
              ></i>
            ) : (
              <i
                className="fa-regular fa-circle-check"
                style={{ color: "#fff" }}
                onClick={() => {
                  handleAgree(true);
                }}
              ></i>
            )}{" "}
            <span
              onClick={() => {
                handleAgree(!agree);
              }}
            >
              개인정보 수집 동의
            </span>
          </div>
          <div className={styles.submit}>
            <button
              type="submit"
              className="animate__animated animate__pulse animate__slower animate__infinite"
            >
              신청하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Sticky;
