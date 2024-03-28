import Popup from "./popup";
import { pb } from "../shared/connection";
import { Suspense } from "react";

export interface PopupResponse {
  active: boolean;
  collectionId: string;
  collectionName: string;
  created: Date;
  id: string;
  image: string;
  updated: Date;
}

const PopupWrapper = async () => {
  const data: PopupResponse[] = await pb
    .collection("popups")
    .getFullList({ filter: "active = true" });

  return (
    <Suspense>
      <Popup data={data} />
    </Suspense>
  );
};

export default PopupWrapper;
