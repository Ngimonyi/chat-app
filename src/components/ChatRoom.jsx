import MessageInput from './MessageInput';
import Message from './Message';

const ChatRoom = () => {

    const messages = [1, 2, 3];

    return <div>
        {messages.map(msg => {
            return <Message />
        })}
        <MessageInput />
    </div>
}

export default ChatRoom;