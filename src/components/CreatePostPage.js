import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import api from '../services/api';
import './CreatePostPage.css'

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [category, setCategory] = useState('');
  const [error, setError] = useState('');
  const [redirectToBlog, setRedirectToBlog] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/posts', { title, content, category });
      console.log('Novo post criado:', response.data);
      setTitle('');
      setContent('');
      setCategory('');
      setRedirectToBlog(true);
    } catch (error) {
      console.error('Erro ao criar novo post:', error);
    } finally {
      setSubmitting(false);
    }
  };

  if (redirectToBlog) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="create-post-container">
      <h2>Criar Novo Post</h2>
      <form className="create-post-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="content">Conteúdo:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>

        <label htmlFor="category">Categoria:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <button type="submit" disabled={submitting}>
          {submitting ? 'Enviando...' : 'Criar Post'}
        </button>

        {error && <p className="form-error">{error}</p>}
      </form>
    </div>
  );
};

export default CreatePost;
