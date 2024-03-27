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
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
