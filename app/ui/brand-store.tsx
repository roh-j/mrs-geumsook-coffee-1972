"use client";

import styles from "./brand-store.module.css";
import { storeResponse } from "./brand-store-wrapper";
import { useEffect, useRef } from "react";

interface BrandStoreProps {
  data: storeResponse[];
}

// 본사 위치
const HEAD_LOCATION = {
  latitude: 37.2553718622108,
  longitude: 127.035944180882,
};

const BrandStore = (props: BrandStoreProps) => {
  const { data } = props;

  const mapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);

  const initMap = () => {
    // 지도 생성
    mapRef.current = new (window as any).naver.maps.Map("map", {
      center: new (window as any).naver.maps.LatLng(
        HEAD_LOCATION.latitude,
        HEAD_LOCATION.longitude
      ),
    });

    data.forEach((store) => {
      // 마커 생성
      markerRef.current = new (window as any).naver.maps.Marker({
        position: new (window as any).naver.maps.LatLng(
          store.latitude,
          store.longitude
        ),
        map: mapRef.current,
      });

      // 마커 클릭 시 이동
      new (window as any).naver.maps.Event.addListener(
        markerRef.current,
        "click",
        (event: any) => {
          const mapLatLng = new (window as any).naver.maps.LatLng(
            store.latitude,
            store.longitude
          );

          mapRef.current.panTo(mapLatLng);
        }
      );
    });
  };

  useEffect(() => {
    if (!data.length) {
      return;
    }

    // 네이버 지도 스크립트가 로드된 후 init.
    setTimeout(() => {
      initMap();
    }, 0);
  }, []);

  const handleClick = (store: storeResponse) => {
    const mapLatLng = new (window as any).naver.maps.LatLng(
      store.latitude,
      store.longitude
    );

    mapRef.current.panTo(mapLatLng);
  };

  return (
    <>
      <div id="map" className={styles.map}></div>
      {data.map((store: storeResponse, index: number) => (
        <p
          key={index}
          onClick={() => {
            handleClick(store);
          }}
        >
          {store.name}
        </p>
      ))}
    </>
  );
};

export default BrandStore;
