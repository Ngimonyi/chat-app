import MessageInput from './MessageInput';
import Message from './Message';
import { useContext } from 'react';
import { ScaleDroneContext } from './ScaleDroneContext';

const ChatRoom = ({ }) => {
    const context = useContext(ScaleDroneContext);

    const handleSendMessage = (message) => {
        // ovdje ovu poruku trebamo posati na Scaledrone
        context.sendMessage(message);
    }

    return <div>
        {context.messages.map(msg => {
            const position = msg.clientId === context.member.id ? 'left' : 'right';
            return <Message key={msg.id} position={position} message={msg.data} />
        })}

        <MessageInput onSendMessage={handleSendMessage} />
    </div>
}

export default ChatRoom;