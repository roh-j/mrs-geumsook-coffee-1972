import PocketBase from "pocketbase";
import {
  POCKET_BASE_EXTERNAL_URL,
  POCKET_BASE_INTERNAL_URL,
} from "../constants/connection";

const internalPB = new PocketBase(POCKET_BASE_INTERNAL_URL);
const externalPB = new PocketBase(POCKET_BASE_EXTERNAL_URL);

export { internalPB, externalPB };
