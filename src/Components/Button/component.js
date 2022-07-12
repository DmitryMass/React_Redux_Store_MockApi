import React from 'react';
import './index.css';

const Button = ({ type, onClick, children }) => {
  return (
    <button className={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
