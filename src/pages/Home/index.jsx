import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useFavoritos } from '../../contexts/FavoriteContext';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { favoritos, toggleFavorito } = useFavoritos();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800 py-20 px-6">
      <h1 className="text-3xl font-semibold text-center mb-10 text-blue-700">
        Posts Recentes
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {posts.map(post => {
          const isFav = favoritos.some(fav => fav.id === post.id);

          return (
            <div
              key={post.id}
              className="bg-white border border-blue-100 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <Link to={`/detalhes/${post.id}`}>
                <h2 className="text-lg font-medium text-blue-800 mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm line-clamp-3">{post.body}</p>
              </Link>

              <button
                onClick={() => toggleFavorito(post)}
                className="mt-4 text-xl self-center text-red-500 hover:scale-110 transition-transform"
                title={isFav ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
              >
                {isFav ? '❤️' : '🤍'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
