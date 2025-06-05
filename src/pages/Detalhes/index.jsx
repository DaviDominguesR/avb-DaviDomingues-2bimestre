import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useFavoritos } from '../../contexts/FavoriteContext';

const Detalhes = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const { favoritos, toggleFavorito } = useFavoritos();

  useEffect(() => {
    if (id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => setPost(res.data))
        .catch(err => console.error(err));
    }
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-blue-50 flex items-center justify-center text-gray-600">
        Carregando...
      </div>
    );
  }

  const isFavorito = favoritos.some(fav => fav.id === post.id);

  return (
    <div className="min-h-screen bg-blue-50 text-gray-800 py-20 px-6">
      <div className="max-w-3xl mx-auto bg-white border border-blue-100 rounded-xl p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-blue-800 mb-4">{post.title}</h1>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{post.body}</p>

        <button
          onClick={() => toggleFavorito(post)}
          className="mt-6 text-2xl transition-transform hover:scale-110"
          title={isFavorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          {isFavorito ? '❤️' : '🤍'}
        </button>
      </div>
    </div>
  );
};

export default Detalhes;
