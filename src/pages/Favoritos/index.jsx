import React from 'react';
import { useFavoritos } from '../../contexts/FavoriteContext';
import { Link } from 'react-router-dom';

const Favoritos = () => {
  const { favoritos, toggleFavorito } = useFavoritos();

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold text-blue-800 mb-10 text-center">
          Meus Favoritos
        </h1>

        {favoritos.length === 0 ? (
          <p className="text-center text-gray-500">Você ainda não favoritou nenhum post.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {favoritos.map(post => (
              <div
                key={post.id}
                className="p-6 rounded-xl bg-white border border-blue-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <Link to={`/detalhes/${post.id}`}>
                  <h2 className="text-lg font-medium text-blue-700 mb-2">{post.title}</h2>
                  <p className="text-gray-600 text-sm line-clamp-3">{post.body}</p>
                </Link>

                <button
                  onClick={() => toggleFavorito(post)}
                  className="mt-4 text-2xl self-center transition-transform hover:scale-110"
                  title="Remover dos favoritos"
                >
                  ❤️
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favoritos;
