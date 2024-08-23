export interface ChatData {
  response: Chat[];
}

export interface Chat {
  id: string;
  created_at: number;
  title: string;
  avatar: string;
  private: boolean;
  last_message: LastMessage;
  count_unread: number;
  users: ChatUser[];
}

export interface LastMessage {
  created_at: number;
  user_id: string;
  user_name: string;
  user_surname: string;
  you: boolean;
  message: string;
}

export interface ChatUser {
  id: string;
  name: string;
  surname: string;
  avatar: string;
  you: boolean;
}
