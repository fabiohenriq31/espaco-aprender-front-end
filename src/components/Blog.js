import React, { useEffect, useState } from 'react';
import BlogPost from './BlogPost';
import Sidebar from './Sidebar';
import { FaTrash } from 'react-icons/fa';
import './Blog.css';
import api from '../services/api';
import Navbar from './Navbar';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await api.get('/posts');
        setPosts(res.data);
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
      }
    };
    fetchPosts();
  }, []);

  const categorizedPosts = posts.reduce((acc, post) => {
    acc[post.category] = acc[post.category] ? [...acc[post.category], post] : [post];
    return acc;
  }, {});

  const handleDeletePost = async (postId) => {
    try {
      await api.delete(`/posts/${postId}`);
      setPosts(posts.filter(post => post._id !== postId));
      console.log(`Post com ID ${postId} deletado com sucesso.`);
    } catch (error) {
      console.error(`Erro ao deletar post com ID ${postId}:`, error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="blog-page">
        <Sidebar categorizedPosts={categorizedPosts} />
        <div className="posts-container">
          {posts.map((post) => (
            <div key={post._id} className="blog-post">
              <BlogPost title={post.title} content={post.content} />
              <button className="delete-button" onClick={() => handleDeletePost(post._id)}>
                <FaTrash /> Deletar
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
