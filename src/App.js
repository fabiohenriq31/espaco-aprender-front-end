import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home'; 
import Agendamento from './components/Agendamento'; 
import Register from './components/Register';
import CreatePostPage from './components/CreatePostPage';
import BlogPage from './components/Blog';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth, onAuthStateChanged } from './firebaseConfig'; 
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faPlus);



function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setUser(user);
        setToken(token);
      } else {
        setUser(null);
        setToken('');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/blog" element={<BlogPage />} />
        
        <Route 
          path="/posts" 
          element={user ? <CreatePostPage token={token} /> : <Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
