import { useState, useEffect } from "react";

const MessageInput = ({ onMessage }) => {
    const [message, setMessage] = useState("");

    const handleClick = () => {
        // ako consumer ove komponente nije u props poslao 'onMessage' onda zanemarimo slanje poruke
        if (onMessage) {
            onMessage(message);
        }
        // nakon što kliknemo na 'Send' button, očistimo <input />
        setMessage("");
    }

    return <div>
        <input type={"text"} value={message} onChange={(e) => setMessage(e.target.value)} />
        <button onClick={handleClick}>Send</button>
    </div>
}

export default MessageInput;