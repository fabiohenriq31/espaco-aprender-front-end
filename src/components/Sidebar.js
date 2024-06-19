import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ categorizedPosts }) => (
  <div className="sidebar">
    <Link to="/posts" className="create-post-link">
          <FontAwesomeIcon icon={faPlus} /> 
    </Link>
    <br />
    <hr />
    <h3>Categorias</h3>
    
    <ul>
      {Object.keys(categorizedPosts).map((category) => (
        <li key={category}>
          {category}
          <ul>
            {categorizedPosts[category].map((post) => (
              <li key={post._id}>{post.title}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);

export default Sidebar;
