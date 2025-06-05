import React, { createContext, useContext, useState, useEffect } from 'react';

const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favoritos, setFavoritos] = useState([]);

  // Carregar do localStorage
  useEffect(() => {
    const stored = localStorage.getItem('posts_favoritos');
    if (stored) {
      setFavoritos(JSON.parse(stored));
    }
  }, []);

  // Salvar no localStorage
  useEffect(() => {
    localStorage.setItem('posts_favoritos', JSON.stringify(favoritos));
  }, [favoritos]);

  const toggleFavorito = (post) => {
    const existe = favoritos.some((item) => item.id === post.id);

    if (existe) {
      setFavoritos(favoritos.filter((item) => item.id !== post.id));
    } else {
      setFavoritos([...favoritos, post]);
    }
  };

  return (
    <FavoriteContext.Provider value={{ favoritos, toggleFavorito }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavoritos = () => useContext(FavoriteContext);
