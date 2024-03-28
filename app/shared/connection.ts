import PocketBase from "pocketbase";
import { POCKET_BASE_URL } from "../constants/connection";

const pb = new PocketBase(POCKET_BASE_URL);

export { pb };
