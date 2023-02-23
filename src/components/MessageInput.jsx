import { useState } from "react";

const MessageInput = ({ onSendMessage }) => {
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        // ako consumer ove komponente nije u props poslao 'onMessage' onda zanemarimo slanje poruke
        if (onSendMessage) {
            onSendMessage(message);
        }
        // nakon što kliknemo na 'Send' button, očistimo <input />
        setMessage("");
    }

    return <div>
        <input type={"text"} value={message} onChange={(e) => setMessage(e.target.value)} />
        <button onClick={handleSendMessage}>Send</button>
    </div>
}

export default MessageInput;