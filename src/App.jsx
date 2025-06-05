// src/App.jsx
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import { FavoriteProvider } from './contexts/FavoriteContext'; // ✅ Importa o contexto

function App() {
  return (
    <BrowserRouter>
      <FavoriteProvider> {/* ✅ Envolve toda a aplicação */}
        <Navbar />
        <AppRoutes />
      </FavoriteProvider>
    </BrowserRouter>
  );
}

export default App;
