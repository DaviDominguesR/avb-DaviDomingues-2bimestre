// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Detalhes from '../pages/Detalhes';
import Favoritos from '../pages/Favoritos'; // ✅ Importa a página Favoritos

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detalhes/:id" element={<Detalhes />} />
      <Route path="/favoritos" element={<Favoritos />} /> {/* ✅ Adiciona a rota */}
    </Routes>
  );
}
