import MessageInput from './MessageInput';
import Message from './Message';

const ChatRoom = () => {

    //const messages = [1, 2, 3];

    const handleInputMessage = (message) => {
        // ovdje ovu poruku trebamo posati na Scaledrone
    }

    return <div>
        {/* {messages.map(msg => {
            return <Message position={'hfjdhjfh'} />
        })} */}

        <Message message={"Bok chat"} member={"Joe"} position={"left"} />
        <Message message={"Bok i tebi"} member={"Peter"} position={"right"} />

        <MessageInput onMessage={handleInputMessage} />
    </div>
}

export default ChatRoom;