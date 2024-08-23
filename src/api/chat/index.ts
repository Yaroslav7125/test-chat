// import { wra\pper } from "../../utils/wrapper";
import { axiosInstance as axios } from "../index";

import type { ChatData } from "./types";

export const getChatList1 = () => {
  //   return wrapper("get", URLS.LIST);
};

export async function getChatList(): Promise<ChatData> {
  return axios
    .get("/chat.get")
    .then((res) => res.data)
    .catch((res) => {
      return res;
    });
}
