import Popup from "./popup";
import { internalPB } from "../shared/connection";
import { revalidatePath } from "next/cache";

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
  const data: PopupResponse[] = await internalPB
    .collection("popups")
    .getFullList({ filter: "active = true", sort: "-order", requestKey: null });

  revalidatePath("/");

  return <Popup data={data} />;
};

export default PopupWrapper;
