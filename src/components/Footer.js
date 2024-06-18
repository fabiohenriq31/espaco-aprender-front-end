import React from 'react';
import './Footer.css';  
import '../App.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Espaço Aprender. Todos os direitos reservados.</p>
        <ul className="footer-links">
          <li><a href="/privacy-policy">Política de Privacidade</a></li>
          <li><a href="/terms-of-service">Termos de Serviço</a></li>
          <li><a href="/contact">Contato</a></li>
        </ul>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
