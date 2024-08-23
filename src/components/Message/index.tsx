import { FC, useMemo } from "react";
import "./index.scss";
import type { Message as MessageType } from "../../api/message/types";
import { format } from "date-fns/format";
import cn from "classnames";
import { ReactComponent as MessageReadIcon } from "../../assets/icons/read-message.svg";

interface MessageProps {
  message: MessageType;
}

export const Message: FC<MessageProps> = ({ children, message }) => {
  const isMine = useMemo(() => {
    return message.user.you;
  }, [message.user.you]);

  return (
    <div
      onClick={() => {
        console.log(message);
      }}
      className={cn("message-item", { "mine-message": isMine })}
    >
      <div
        className={cn("message-item-wrapper", {
          "mine-message-wrapper": isMine,
        })}
      >
        <div className="message-item-wrapper-content">
          {message.message}
          <div className="message-item-is-readed-icon">
            <span>{format(message.created_at, "HH:mm")}</span>
            {isMine && <MessageReadIcon></MessageReadIcon>}
          </div>
        </div>
      </div>
    </div>
  );
};
