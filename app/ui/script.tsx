"use client";

import AOS from "aos";
import { useEffect } from "react";

const Script = () => {
  const loadPureCounter = async () => {
    // @ts-ignore
    const { default: PureCounter } = await import("@srexi/purecounterjs");

    new PureCounter();
  };

  useEffect(() => {
    AOS.init(); // 스크롤 애니메이션
    loadPureCounter(); // 숫자 카운터
  }, []);

  return <></>;
};

export default Script;
