import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth, onAuthStateChanged } from '../firebaseConfig';
import api from '../services/api'; 
import '../App.css';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        
        setUser(user);
        
        try {
          const response = await api.get(`/users/${user.uid}`);
          setUserName(response.data.name);
        } catch (error) {
          console.error('Erro ao buscar o nome do usuário:', error);
        }

      } else {
        
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      setUserName('');
      
    } catch (error) {
      console.error('Erro ao fazer logout:', error.message);
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/agendamento">Agendamento</Link></li>
        {user ? (
          <>
            <li>Olá, {userName}</li>
            <li><button className='botaoLogin' onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/cadastro">Cadastro</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
