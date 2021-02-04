import React from 'react';
import './button.scss';

const Button = ({ restart }) => {
  return (
    <div className="button" onClick={restart}>
      Shuffle
    </div>
  );
};

export default Button;
