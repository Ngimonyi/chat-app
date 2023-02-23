import { createContext, useEffect, useState } from "react";

// ovo je inicijalna definicija context-a sa defaultnim value-om
export const ScaleDroneContext = createContext({
    member: null,
    messages: [],
    sendMessage: null
});

const ScaleDronContextProvider = ({ children }) => {
    // u ovom state-u čuvamo contextValue koji se propagira kroz Provider
    const [contextValue, setContextValue] = useState({
        member: null,
        messages: [],
        sendMessage: null
    });
    // ovaj state nam može biti koristan za loader
    // npr. ako je isConnectionOpen false da se prikaže loader
    // a ako je isConnectionOpen true onda se ne prikaže loader nego <ChatRoom />
    const [isConnectionOpen, setIsConnectionOpen] = useState(false);

    const CHANNEL_ID = 'WmIU1iLK4cB4qPwS';

    useEffect(() => {
        const drone = new window.ScaleDrone(CHANNEL_ID);
        drone.on("open", error => {
            if (error) {
                setIsConnectionOpen(false);
                return console.error(error);
            }
            setIsConnectionOpen(true);
            console.log("connection opened");
        });

        const room = drone.subscribe("observable-chat-room");
        room.on('members', function (members) {
            // List of members as an array
            var me = members.find(function (member) {
                return member.id === drone.clientId;
            });

            setContextValue(c => {
                return {
                    ...c,
                    member: me
                }
            });
        });
        // kad se komponenta mounta, subscribe-aj se na poruke
        room.on('message', message => {
            // Received message from room
            console.log("message recived: ", message);
            setContextValue(c => {
                return {
                    ...c,
                    messages: [...c.messages, message]
                }
            });
        });


        setContextValue(c => {
            return {
                ...c,
                sendMessage: (message) => {
                    drone.publish({
                        room: 'observable-chat-room',
                        message: message
                    });
                }
            }
        });


        return () => {
            drone.close();
            room.unsubscribe();
        }
    }, []);

    // contextValue se propagira kroz provider i dostupan je svim komponentama koje su children!!
    return <ScaleDroneContext.Provider value={contextValue}>
        {isConnectionOpen && children}
    </ScaleDroneContext.Provider>
}

export default ScaleDronContextProvider;