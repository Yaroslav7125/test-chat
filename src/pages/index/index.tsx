import React, { FC, useEffect } from "react";
import { IPage } from "../../interface/page";
import "./index.scss";
import { ChatItemList } from "../../components/ChatItemList";
import { Chat } from "../../components/Chat";
import { getChatList } from "../../api/chat";
import { useStore } from "../../store";

export const PageIndex: FC<IPage> = (props: IPage) => {
  const { title } = props;

  // const count = useCountStore((store) => store.count);
  // const decrement = useCountStore((store) => store.decrement);
  // const increment = useCountStore((store) => store.increment);

  const { chats, setChats, currentMessages } = useStore();

  useEffect(() => {
    console.log(chats);
  }, [chats]);

  useEffect(() => {
    (async () => {
      const result = await getChatList();
      setChats(result.response);
      console.log(result);
    })();
  }, []);

  return (
    <div className="container">
      <ChatItemList />
      {currentMessages && <Chat />}
    </div>
  );
};
