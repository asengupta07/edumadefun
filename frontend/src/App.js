import './App.css';
import { Route, Routes } from 'react-router-dom';
import ChatInterface from './AiChatWindow';
import LandingPage from './Home';
import Signup from './signup';
function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/ChatWindow" element={<ChatInterface />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </div>
  );
}

export default App;
