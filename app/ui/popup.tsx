"use client";

import Cookies from "js-cookie";
import Draggable from "react-draggable";
import Image from "next/image";
import styles from "./popup.module.css";
import { POCKET_BASE_INTERNAL_URL } from "../constants/connection";
import { PopupResponse } from "./popup-wrapper";
import { useEffect, useState } from "react";

interface PopupsState extends PopupResponse {
  isVisible: boolean;
}

interface PopupProps {
  data: PopupResponse[];
}

const Popup = (props: PopupProps) => {
  const { data } = props;

  const [popups, setPopups] = useState<PopupsState[]>(
    data.map((row: PopupResponse) => ({
      ...row,
      isVisible: false,
    }))
  );
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    let newPopups = [...popups];

    // Cookie가 존재하지 않는다면 팝업 열기
    for (let i = 0; i < newPopups.length; i++) {
      if (!Cookies.get(`popup_${newPopups[i].id}`)) {
        newPopups[i] = {
          ...newPopups[i],
          isVisible: true,
        };
      }
    }

    setPopups(newPopups);
    setIsReady(true);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeToday = (id: string) => {
    setPopups(
      popups.map((row: PopupsState) => {
        if (row.id === id) {
          return {
            ...row,
            isVisible: false,
          };
        }

        return row;
      })
    );

    const today = new Date();
    const expires = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
      23,
      59,
      59
    );

    Cookies.set(`popup_${id}`, "1", {
      expires,
    });
  };

  const closeOnce = (id: string) => {
    setPopups(
      popups.map((row: PopupsState) => {
        if (row.id === id) {
          return {
            ...row,
            isVisible: false,
          };
        }

        return row;
      })
    );
  };

  return (
    <>
      {isReady && (
        <>
          {popups.filter((row: PopupsState) => row.isVisible).length > 0 && (
            <div className={styles.backdrop}></div>
          )}
          {popups
            .filter((row: PopupsState) => row.isVisible)
            .map((row: PopupsState) => (
              <Draggable key={row.id} positionOffset={{ x: "-50%", y: "80px" }}>
                <div className={styles.wrapper}>
                  <div className={styles.container}>
                    <Image
                      src={`${POCKET_BASE_INTERNAL_URL}/api/files/${row.collectionName}/${row.id}/${row.image}`}
                      alt=""
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                    <div className={styles.footer}>
                      <button
                        type="button"
                        onClick={() => {
                          closeToday(row.id);
                        }}
                        onTouchEnd={() => {
                          closeToday(row.id);
                        }}
                      >
                        오늘 하루동안 보지 않기
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          closeOnce(row.id);
                        }}
                        onTouchEnd={() => {
                          closeOnce(row.id);
                        }}
                      >
                        닫기
                      </button>
                    </div>
                  </div>
                </div>
              </Draggable>
            ))}
        </>
      )}
    </>
  );
};

export default Popup;
