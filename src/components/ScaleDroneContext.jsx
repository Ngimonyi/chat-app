import { createContext, useEffect, useState } from "react";

export const ScaleDroneContext = createContext({
  member: null,
  messages: [],
  sendMessage: null,
});

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

const ScaleDronContextProvider = ({ children }) => {
  const [contextValue, setContextValue] = useState({
    member: null,
    messages: [],
    sendMessage: null,
  });
  const [randomMemberName, setRandomMemberName] = useState("");

  
  const [isConnectionOpen, setIsConnectionOpen] = useState(false);

  const CHANNEL_ID = "WmIU1iLK4cB4qPwS";

  useEffect(() => {
    const rndIndex = parseInt(Math.random() * 100) % memberNames.length;
    setRandomMemberName(memberNames[rndIndex]);
    const drone = new window.ScaleDrone(CHANNEL_ID);
    drone.on("open", (error) => {
      if (error) {
        setIsConnectionOpen(false);
        return console.error(error);
      }
      setIsConnectionOpen(true);
      console.log("connection opened");
    });

    const room = drone.subscribe("observable-chat-room");
    room.on("members", function (members) {
      const me = members.find(function (member) {
        return member.id === drone.clientId;
      });

      setContextValue((c) => {
        return {
          ...c,
          member: {
            id: me.id,
            name: memberNames[rndIndex],
          },
        };
      });
    });

    room.on("message", (message) => {
      console.log("message recived: ", message);
      setContextValue((c) => {
        return {
          ...c,
          messages: [...c.messages, message],
        };
      });
    });

    setContextValue((c) => {
      return {
        ...c,
        sendMessage: (message) => {
          drone.publish({
            room: "observable-chat-room",
            message: {
              text: message,
              sender: randomMemberName,
            },
          });
        },
      };
    });

    return () => {
      drone.close();
      room.unsubscribe();
    };
  }, [randomMemberName]);

  return (
    <ScaleDroneContext.Provider value={contextValue}>
      {isConnectionOpen && children}
    </ScaleDroneContext.Provider>
  );
};

export default ScaleDronContextProvider;
