export interface MessageData {
  response: Message[];
}

export interface Message {
  id: string;
  created_at: number;
  user: User;
  message: string;
  is_new: boolean;
}

export interface User {
  id: string;
  name: string;
  surname: string;
  avatar: string;
  you: boolean;
}
