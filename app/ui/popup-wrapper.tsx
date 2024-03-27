import Popup from "./popup";
import { pb } from "../shared/connection";
import { Suspense } from "react";

const PopupWrapper = async () => {
  const data = await pb
    .collection("popups")
    .getFullList({ filter: "active = true" });

  return (
    <Suspense>
      <Popup data={data} />
    </Suspense>
  );
};

export default PopupWrapper;
