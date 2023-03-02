import MessageInput from "./MessageInput";
import Message from "./Message";
import { useContext, useRef, useEffect, useState } from "react";
import { ScaleDroneContext } from "./ScaleDroneContext";

const memberNames = [
  "Neil Reilly",
  "Haleigh Morse",
  "Larissa Brady",
  "Arianna Sandoval",
  "Leonel Zuniga",
  "Karsyn Burgess",
  "Amiya Hughes",
  "Delilah Mcneil",
  "James Williams",
  "Londyn Bruce",
  "Landin Ramsey",
  "Alfredo Campos",
];

const ChatRoom = () => {
  const [me, setMe] = useState("");
  const [them, setThem] = useState("");

  useEffect(() => {
    const rndMeIndex = parseInt(Math.random() * 100) % memberNames.length;
    const rndThemIndex = parseInt(Math.random() * 100) % memberNames.length;
    setMe(memberNames[rndMeIndex]);
    setThem(memberNames[rndThemIndex]);
  }, []);

  const context = useContext(ScaleDroneContext);
  const bottomRef = useRef(null);

  const handleSendMessage = (message) => {
    // ovdje ovu poruku trebamo posati na Scaledrone
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

          const memberName = position === "left" ? me : them;
          return (
            <Message
              key={msg.id}
              position={position}
              message={msg.data}
              member={memberName}
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
