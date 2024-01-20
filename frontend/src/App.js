import './App.css';
import { Route, Routes } from 'react-router-dom';
import ChatInterface from './AiChatWindow';
import LandingPage from './Home';
import Signup from './signup';
import PdfUpload from './pdfupload';
function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/ChatWindow" element={<ChatInterface />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/PdfUpload" element={<PdfUpload />} />
    </Routes>
    </div>
  );
}

export default App;
