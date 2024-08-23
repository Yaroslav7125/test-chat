import { FC, ReactNode, useEffect } from "react";
import "./index.scss";
import { useStore } from "../../store";
import { Chat } from "../../api/chat/types";
import { Avatar } from "../Avatar";
import { format } from "date-fns";
import { getMessages } from "../../api/message";

interface ChatItemProps {
  children?: ReactNode;
  chat: Chat;
  onClick?: (chatId: Chat) => void;
}

const ChatItem: FC<ChatItemProps> = ({ chat, onClick }) => {
  return (
    <li className="chat-item" onClick={() => onClick?.(chat)}>
      <Avatar src={chat.avatar} size="md"></Avatar>
      <div className="chat-item-content">
        <div className="chat-item-content-header">
          <h3>{chat.title}</h3>
          <span>{format(chat.last_message.created_at, "HH:mm")}</span>
        </div>
        <div className="message-preview">{chat.last_message.message}</div>
      </div>
    </li>
  );
};

export const ChatItemList = () => {
  const { chats, setCurrentChatMessages, setCurrentChatItem } = useStore();

  const handleClick = (chat: Chat) => {
    (async () => {
      const { response: currentMessages } = await getMessages(chat.id);
      setCurrentChatMessages(currentMessages);
      setCurrentChatItem(chat);
    })();
  };

  return (
    <div className="chat-items-list-container">
      <h1 className="chat-items-list-header">All chats</h1>
      <ul className="chat-list">
        {chats.map((item) => (
          <ChatItem onClick={handleClick} key={item.id} chat={item} />
        ))}
      </ul>
    </div>
  );
};
