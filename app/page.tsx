import Differentiation from "./ui/differentiation";
import Feature from "./ui/feature";
import Footer from "./ui/footer";
import Header from "./ui/header";
import Hero from "./ui/hero";
import Inquiry from "./ui/inquiry";
import Introduction from "./ui/introduction";
import President from "./ui/president";
import Promotion from "./ui/promotion";
import Review from "./ui/review";
import Sales from "./ui/sales";

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
      <President />
      <Promotion />
      {/* <Inquiry /> */}
      <Footer />
    </>
  );
};

export default MainPage;
