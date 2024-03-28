import CommonQuestion from "./ui/common-question";
import MainHome from "./ui/main-home";
import PopupWrapper from "./ui/popup-wrapper";

const MainPage = () => {
  return (
    <div>
      Welcome
      <MainHome />
      <CommonQuestion />
      <PopupWrapper />
    </div>
  );
};

export default MainPage;
