import React from 'react';
import logo from '../images/espaco-aprender.png'; 
function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo da Escola" />
      <h1>Escola</h1>
    </header>
  );
}

export default Header;
