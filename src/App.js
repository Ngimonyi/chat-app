import './App.css';
import ChatRoom from './components/ChatRoom';
import ScaleDronContextProvider from './components/ScaleDroneContext';


function App() {

  return (
    <>
      <header>
        <h1>Welcome to the chat</h1>
      </header>
      <ScaleDronContextProvider>
        <ChatRoom />
      </ScaleDronContextProvider>
    </>

  );
}

export default App;
