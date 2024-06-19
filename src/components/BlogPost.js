import React from 'react';
import './BlogPost.css';

const BlogPost = ({ title, content }) => (
  <div className="post-container">
    <h2 className="post-title">{title}</h2>
    <p className="post-content">{content}</p>
  </div>
);

export default BlogPost;
