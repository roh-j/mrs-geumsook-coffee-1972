import { Metadata } from "next";
import { ReactNode } from "react";
import "./ui/reset.css";
import "animate.css";
import "aos/dist/aos.css";
import "@splidejs/react-splide/css";

export const metadata: Metadata = {
  title: "금숙씨커피1972",
  description: "대한민국 엄마의 자존심 금숙씨가 만들면 다 맛있습니다.",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
