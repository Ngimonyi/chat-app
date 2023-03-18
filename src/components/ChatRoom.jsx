import MessageInput from "./MessageInput";
import Message from "./Message";
import { useContext, useRef, useEffect } from "react";
import { ScaleDroneContext } from "./ScaleDroneContext";

const ChatRoom = () => {
  const context = useContext(ScaleDroneContext);
  const bottomRef = useRef(null);

  const handleSendMessage = (message) => {
    
    context.sendMessage(message);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [context.messages]);

  return (
    <>
      <div className="messages">
        {context.messages.map((msg) => {
          const position =
            msg.clientId === context.member.id ? "left" : "right";

          
          return (
            <Message
              key={msg.id}
              position={position}
              message={msg.data.text}
              member={msg.data.sender}
            />
          );
        })}
        <div ref={bottomRef} />
      </div>

      <MessageInput onSendMessage={handleSendMessage} />
    </>
  );
};

export default ChatRoom;
