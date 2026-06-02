import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
//import Profile from './pages/Profile';
//import Settings from './pages/Settings';

// Criando componentes 
const home = Home;
const Diego = () => <div>Página de perfil do Diego</div>;
const Rodrigo = () => <div>Página de configurações do Rodrigo</div>;

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/diego" element={<Diego />} />
        <Route path="/rodrigo" element={<Rodrigo />} />
      </Routes>
    </div>
  );
}

export default App;