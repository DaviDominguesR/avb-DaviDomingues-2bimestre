import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-900 min-h-screen text-gray-200">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-100 tracking-wide">Posts Recentes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map(post => (
          <Link 
            key={post.id} 
            to={`/detalhes/${post.id}`} 
            className="block p-5 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-400 text-sm line-clamp-3">{post.body}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
