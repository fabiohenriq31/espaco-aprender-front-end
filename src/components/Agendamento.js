import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { auth } from '../firebaseConfig';
import './Agendamento.css'
import '../index.css'
import  Navbar  from './Navbar';


const AppointmentForm = () => {
  const [professionals, setProfessionals] = useState([{}]);
  const [professional, setProfessional] = useState('');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');

  useEffect(() => {
    const fetchProfessionals = async () => {
      const res = await api.get('/professionals');
      setProfessionals(res.data);
    };
    fetchProfessionals();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
      const token = await user.getIdToken();
      const patientEmail = user.email;
      const appointment = {
        professional,
        patientName,
        patientPhone,
        patientEmail,
        date: appointmentDate,
        time: appointmentTime,
      };
      try {
        await api.post('/appointments', appointment, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        alert('Agendamento realizado com sucesso!');
      } catch (err) {
        alert('Erro ao realizar o agendamento.');
      }
    }
  };

  return (
    <div>
      <Navbar/>

      <form onSubmit={handleSubmit}>
      <label htmlFor="professional">Profissional:</label>
      <select id="professional" value={professional} onChange={(e) => setProfessional(e.target.value)}>
        {professionals.map((prof) => (
          <option key={prof._id} value={prof._id}>
            {prof.nome}
          </option>
          ))}
        </select>
        <label>Nome do Paciente:</label>
        <input
          type="text"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
        />
        <label>Telefone de Contato:</label>
        <input
          type="text"
          value={patientPhone}
          onChange={(e) => setPatientPhone(e.target.value)}
        />
        <label>Data:</label>
        <input
          type="date"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
        />
        <label>Hora:</label>
        <input
          type="time"
          value={appointmentTime}
          onChange={(e) => setAppointmentTime(e.target.value)}
        />
        <button type="submit">Agendar</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
