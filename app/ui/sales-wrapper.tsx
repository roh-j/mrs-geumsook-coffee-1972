import Sales from "./sales";
import { internalPB } from "../shared/connection";
import { revalidatePath } from "next/cache";

export interface SalesResponse {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  target: string;
  updated: string;
  value: string;
}

export interface MappedData {
  [index: string]: string;
  graph_label_1: string;
  graph_amount_1: string;
  graph_label_2: string;
  graph_amount_2: string;
  graph_label_3: string;
  graph_amount_3: string;
  graph_label_4: string;
  graph_amount_4: string;
  graph_label_5: string;
  graph_amount_5: string;
  graph_label_5_emphasis: string;
  daily_sales_label: string;
  daily_sales_amount: string;
  monthly_sales_label: string;
}

const SalesWrapper = async () => {
  const data: SalesResponse[] = await internalPB
    .collection("sales")
    .getFullList({ requestKey: null });

  const mappedData = {} as MappedData;

  data.forEach((item: SalesResponse) => {
    mappedData[item.target] = item.value;
  });

  revalidatePath("/");

  return <Sales data={mappedData} />;
};

export default SalesWrapper;
