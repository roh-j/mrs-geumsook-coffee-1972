import Common from "./ui/common";
import Differentiation from "./ui/differentiation";
import Feature from "./ui/feature";
import Footer from "./ui/footer";
import Header from "./ui/header";
import Hero from "./ui/hero";
import Inquiry from "./ui/inquiry";
import Introduction from "./ui/introduction";
import Menu from "./ui/menu";
import PopupWrapper from "./ui/popup-wrapper";
import President from "./ui/president";
import Promotion from "./ui/promotion";
import Review from "./ui/review";
import Sales from "./ui/sales";
import Sticky from "./ui/sticky";
import { Suspense } from "react";

const MainPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Introduction />
      <Sales />
      <Differentiation />
      <Feature />
      <Review />
      <Menu />
      <President />
      <Promotion />
      <Inquiry />
      <Footer />
      <Sticky />
      <Common />
      <Suspense fallback={<div></div>}>
        <PopupWrapper />
      </Suspense>
    </>
  );
};

export default MainPage;
