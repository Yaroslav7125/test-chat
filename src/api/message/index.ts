import { axiosInstance as axios } from "../index";
import { MessageData } from "./types";

export async function getMessages(chat_id: string): Promise<MessageData> {
  return axios
    .get("/message.get", {
      params: {
        chat_id,
      },
    })
    .then((res) => res.data)
    .catch((res) => {
      return res;
    });
}
