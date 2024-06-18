import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../firebaseConfig';
import api from '../services/api';  
import Navbar from './Navbar';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      await updateProfile(user, {
        displayName: name,
      });

      const userData = {
        uid: user.uid,
        name,
        email: user.email,
        phone,
      };
      console.log(userData);

      const response = await api.post('/users', userData);
      console.log('Resposta da API:', response);
      
      
    } catch (error) {
      console.error("Erro ao fazer registro", error);
      alert('Erro ao fazer registro. Verifique os campos.');
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" required />
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefone" required />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Register;
