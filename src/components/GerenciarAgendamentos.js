import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';
import { auth } from '../firebaseConfig';

const db = getFirestore();

function GerenciarAgendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    const fetchAgendamentos = async () => {
      const querySnapshot = await getDocs(collection(db, 'agendamentos'));
      const agendamentosList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAgendamentos(agendamentosList);
    };
    fetchAgendamentos();
  }, []);

  const cancelarAgendamento = async (id) => {
    await deleteDoc(doc(db, 'agendamentos', id));
    setAgendamentos(agendamentos.filter(agendamento => agendamento.id !== id));
  };

  const reagendar = async (id, novaData, novaHora) => {
    const agendamentoDoc = doc(db, 'agendamentos', id);
    await updateDoc(agendamentoDoc, { data: novaData, hora: novaHora });
    setAgendamentos(agendamentos.map(agendamento => agendamento.id === id ? { ...agendamento, data: novaData, hora: novaHora } : agendamento));
  };

  return (
    <div>
      <h1>Gerenciar Agendamentos</h1>
      <ul>
        {agendamentos.map(agendamento => (
          <li key={agendamento.id}>
            {agendamento.data} às {agendamento.hora}
            <button onClick={() => cancelarAgendamento(agendamento.id)}>Cancelar</button>
            <button onClick={() => reagendar(agendamento.id, prompt('Nova data'), prompt('Nova hora'))}>Reagendar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GerenciarAgendamentos;
