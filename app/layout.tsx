import { Metadata } from "next";
import { ReactNode } from "react";
import "./ui/reset.css";
import "animate.css";
import "aos/dist/aos.css";
import "@splidejs/react-splide/css";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "금숙씨커피1972",
  description: "대한민국 엄마의 자존심 금숙씨가 만들면 다 맛있습니다.",
  openGraph: {
    title: "금숙씨커피1972",
    description: "대한민국 엄마의 자존심 금숙씨가 만들면 다 맛있습니다.",
    url: "https://gsc1972.com/",
    siteName: "금숙씨커피1972",
    images: [
      {
        url: "https://gsc1972.com/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
