import Script from "next/script";
import { Metadata } from "next";
import { ReactNode } from "react";
import "./ui/reset.css";

export const metadata: Metadata = {
  title: {
    template: "%s | 금숙씨커피1972",
    default: "금숙씨커피1972",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <Script src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=v0ct1c78hh" />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
