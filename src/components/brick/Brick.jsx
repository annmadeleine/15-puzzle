import React from 'react';
import './brick.scss';

const Brick = ({ number, index, onClick }) => {
  return (
    <div
      className={`brick${index + 1 === number ? ' brick-correct' : ''}${
        number === 16 ? ' brick-hidden' : ''
      }`}
      onClick={onClick}
    >
      {number}
    </div>
  );
};

export default Brick;
