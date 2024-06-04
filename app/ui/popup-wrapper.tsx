import Popup from "./popup";
import { pb } from "../shared/connection";

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
    .getFullList({ filter: "active = true", sort: "-order", requestKey: null });

  return <Popup data={data} />;
};

export default PopupWrapper;
