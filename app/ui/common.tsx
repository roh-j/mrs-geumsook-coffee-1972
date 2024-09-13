"use client";

import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

const Common = () => {
  const loadPureCounter = async () => {
    // @ts-ignore
    const { default: PureCounter } = await import("@srexi/purecounterjs");

    new PureCounter();
  };

  // 'Prop className did not match' 오류를 해결하기 위해 동적 임포트를 적용.
  // 동적 임포트를 사용하지 않으면 AOS로 인해 하이드레이션 시 className 불일치 발생.
  const loadAOS = async () => {
    const AOS = await import("aos");

    AOS.init({ offset: 200 });
  };

  useEffect(() => {
    loadPureCounter();
    loadAOS();

    window.history.scrollRestoration = "manual";
  }, []);

  return <ToastContainer />;
};

export default Common;
