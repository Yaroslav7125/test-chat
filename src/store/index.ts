import { create } from "zustand";
import { Chat } from "../api/chat/types";
import { getMessages } from "../api/message";
import { Message } from "../api/message/types";

type State = {
  chats: Chat[];
  currentChatItem: Chat | null;
  currentMessages: Message[] | null;
};

type Actions = {
  setCurrentChatItem: (chats: Chat) => void;
  setCurrentChatMessages: (chats: Message[]) => void;
  setChats: (chats: Chat[]) => void;
};

export const useStore = create<State & Actions>((set) => ({
  chats: [],
  currentChatItem: null,
  currentMessages: null,
  setChats: (chats: Chat[]) => set(() => ({ chats })),
  setCurrentChatItem: (chat: Chat) => set(() => ({ currentChatItem: chat })),
  setCurrentChatMessages: (messages: Message[]) => {
    set(() => ({ currentMessages: messages }));
  },
}));
