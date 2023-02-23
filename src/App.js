import './App.css';
import ChatRoom from './components/ChatRoom';
import ScaleDronContextProvider from './components/ScaleDroneContext';

function App() {

  return (
    <div>
      <ScaleDronContextProvider>
        <ChatRoom />
      </ScaleDronContextProvider>
    </div>
  );
}

export default App;
