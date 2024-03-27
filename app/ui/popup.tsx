"use client";

import Draggable from "react-draggable";
import Image from "next/image";
import styles from "./popup.module.css";
import { useEffect, useState } from "react";

const Popup = (props: any) => {
  const { data } = props;

  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const stamp = year + month + day;

  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const popupStorage = localStorage.getItem("popup");

    if (popupStorage && Number(popupStorage) < stamp) {
      localStorage.removeItem("popup");
      return;
    }

    setIsVisible(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeToday = () => {
    localStorage.setItem("popup", String(stamp));
  };

  return (
    <>
      {isVisible && (
        <>
          {data.map((row: any, index: number) => (
            <Draggable key={index} positionOffset={{ x: "-50%", y: "-50%" }}>
              <div className={styles.container}>
                <Image
                  src={`http://127.0.0.1:8090/api/files/${row.collectionName}/${row.id}/${row.image}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "auto", height: "100%" }}
                  alt=""
                />
                <div onClick={closeToday}>오늘 하루동안 열지 않기</div>
              </div>
            </Draggable>
          ))}
        </>
      )}
    </>
  );
};

export default Popup;
