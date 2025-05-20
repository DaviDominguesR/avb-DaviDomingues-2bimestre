import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Detalhes = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if(id) {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => setPost(res.data))
        .catch(err => console.error(err));
    }
  }, [id]);

  if (!post) return <p className="text-gray-300 p-6">Carregando...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-900 min-h-screen text-gray-200">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-400 leading-relaxed whitespace-pre-line">{post.body}</p>
    </div>
  );
};

export default Detalhes;
