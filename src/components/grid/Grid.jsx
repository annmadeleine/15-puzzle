import React from 'react';
import Brick from '../brick/Brick';
import './grid.scss';

const Grid = ({ bricks, onClick }) => {
  const showBricks = bricks.map((brick, index) => {
    return (
      <Brick
        number={brick}
        key={index}
        index={index}
        onClick={() => onClick(index)}
      />
    );
  });
  return <div className="grid">{showBricks}</div>;
};

export default Grid;
