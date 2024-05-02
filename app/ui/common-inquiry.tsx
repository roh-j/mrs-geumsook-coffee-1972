"use client";

import styles from "./common-inquiry.module.css";
import { pb } from "../shared/connection";
import { useForm } from "react-hook-form";

const CommonInquiry = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const createInquiry = async (data: any) => {
    const record = await pb.collection("inquirys").create(data);

    reset();
  };

  return (
    <form onSubmit={handleSubmit((data) => createInquiry(data))}>
      <input
        {...register("name", { required: true })}
        className={styles.input}
        placeholder="이름"
      />
      {errors.name && <p className={styles.error}>이름을 입력해 주세요.</p>}
      <input
        {...register("phone", { required: true })}
        className={styles.input}
        placeholder="전화번호"
      />
      {errors.phone && (
        <p className={styles.error}>전화번호를 입력해 주세요.</p>
      )}
      <input
        {...register("location", { required: true })}
        className={styles.input}
        placeholder="창업 희망 지역"
      />
      {errors.location && (
        <p className={styles.error}>창업 희망 지역을 입력해 주세요.</p>
      )}
      <input
        {...register("content", { required: true })}
        className={styles.input}
        placeholder="상세 내용"
      />
      {errors.content && (
        <p className={styles.error}>상세 내용을 입력해 주세요.</p>
      )}
      <button type="submit">상담신청</button>
    </form>
  );
};

export default CommonInquiry;
