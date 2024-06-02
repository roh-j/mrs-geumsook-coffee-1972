"use client";

import AOS from "aos";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

const Common = () => {
  const loadPureCounter = async () => {
    // @ts-ignore
    const { default: PureCounter } = await import("@srexi/purecounterjs");

    new PureCounter();
  };

  useEffect(() => {
    loadPureCounter();

    AOS.init();

    window.history.scrollRestoration = "manual";
  }, []);

  return <ToastContainer />;
};

export default Common;
