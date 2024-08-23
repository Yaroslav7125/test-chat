import { FC, useState } from "react";
import "./index.scss";
import { ReactComponent as ChatIcon } from "../../assets/icons/chat.svg";
import { useStore } from "../../store";
import { Message } from "../Message";

export const Chat: FC = () => {
  const messages = useStore((state) => state.currentMessages);
  const currentChat = useStore((state) => state.currentChatItem);
  return (
    <div className="chat-container">
      <header>
        <ChatIcon />
        <h2 className="chat-container-header">{currentChat?.title}</h2>
      </header>
      <section className="message-section">
        {messages?.map((messageItem) => {
          return <Message key={messageItem.id} message={messageItem}></Message>;
        })}
      </section>

      {/* <section style={{ padding: "8px", border: "1px dotted blue" }}>
        <input type="text" />
      </section> */}
    </div>
  );
};
