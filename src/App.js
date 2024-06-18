import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home'; 
import Agendamento from './components/Agendamento'; 
import Blog from './components/Blog'; 
import Register from './components/Register';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
    
  );
}

export default App;
