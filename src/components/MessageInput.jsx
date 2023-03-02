import { useState } from "react";

const MessageInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    // ako consumer ove komponente nije u props poslao 'onMessage' onda zanemarimo slanje poruke
    if (onSendMessage) {
      onSendMessage(message);
    }
    // nakon što kliknemo na 'Send' button, očistimo <input />
    setMessage("");
  };

  const handleSendClick = () => {
    sendMessage();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="message-input-container">
      <input
        type={"text"}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button className="msg-send" onClick={handleSendClick}>
        Send
      </button>
    </div>
  );
};

export default MessageInput;
