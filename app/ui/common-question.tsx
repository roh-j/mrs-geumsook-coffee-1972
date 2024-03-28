"use client";

import styles from "./common-question.module.css";
import { pb } from "../shared/connection";
import { useForm } from "react-hook-form";

const CommonQuestion = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const createQuestion = async (data: any) => {
    const record = await pb.collection("questions").create(data);

    reset();
  };

  return (
    <form onSubmit={handleSubmit((data) => createQuestion(data))}>
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

export default CommonQuestion;
