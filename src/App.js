import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import './styles/root.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*
        <Route path="/diego" element={<Diego />} />
        <Route path="/rodrigo" element={<Rodrigo />} />
        */}
      </Routes>
    </div>
  );
}

export default App;