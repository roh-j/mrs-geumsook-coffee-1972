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
    loadPureCounter();

    AOS.init();
  }, []);

  return <></>;
};

export default Script;
