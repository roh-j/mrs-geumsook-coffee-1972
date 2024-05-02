import BrandStore from "./brand-store";
import { pb } from "../shared/connection";

export interface storeResponse {
  address: string;
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  latitude: number;
  longitude: number;
  name: string;
  updated: string;
}

const BrandStoreWrapper = async () => {
  const data: storeResponse[] = await pb.collection("stores").getFullList();

  return <BrandStore data={data} />;
};

export default BrandStoreWrapper;
