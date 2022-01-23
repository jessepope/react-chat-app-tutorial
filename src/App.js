import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const projectID = 'a66f9f31-7417-487e-ba3f-f1ea4b913c01'

const App = () => {
  return (
    <ChatEngine
        height="100vh"
        projectID={projectID}
        userName="JesseP"
        userSecret="secret"
        renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps} />}
    />
  );
};

export default App;