import MessageInput from './MessageInput';
import Message from './Message';

const ChatRoom = () => {

    const messages = [1, 2, 3];

    const handleInputMessage = (message) => {
        // ovdje ovu poruku trebamo posati na Scaledrone
    }

    return <div>
        {messages.map(msg => {
            return <Message />
        })}
        <MessageInput onMessage={handleInputMessage} />
    </div>
}

export default ChatRoom;