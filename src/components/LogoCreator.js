import React, { useState } from 'react';
import './LogoCreator.css';

const LogoCreator = () => {
  const [isRectangleVisible, setIsRectangleVisible] = useState(false);

  const toggleRectangle = () => {
    setIsRectangleVisible(!isRectangleVisible);
  };

  return (
    <div className="logo-creator">
      <button onClick={toggleRectangle} className="toggle-button">
        {isRectangleVisible ? 'Fechar Retângulo' : 'Abrir Retângulo'}
      </button>
      {isRectangleVisible && (
        <div className="rectangle">
          {/* img login */}
          <p>Área para criar o logotipo</p>
        </div>
      )}
    </div>
  );
};

export default LogoCreator;
