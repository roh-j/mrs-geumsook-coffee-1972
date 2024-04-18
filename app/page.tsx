import CommonInquiry from "./ui/common-inquiry";
import MainHome from "./ui/main-home";
import PopupWrapper from "./ui/popup-wrapper";
import { Suspense } from "react";

const MainPage = () => {
  return (
    <div>
      Welcome
      <MainHome />
      <CommonInquiry />
      <Suspense>
        <PopupWrapper />
      </Suspense>
    </div>
  );
};

export default MainPage;
