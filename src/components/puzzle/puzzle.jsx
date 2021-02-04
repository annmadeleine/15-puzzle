import React, { useState } from 'react';

import Grid from '../grid/Grid';
import Button from '../button/Button';
import { Game } from '../../game';
import Message from '../message/Message';

const Puzzle = () => {
  const [isGrid, setIsGrid] = useState(Game.init);
  const [isWinner, setIsWinner] = useState(Game.isWinner(isGrid));
  const content = 'Congratulations!';

  const onBrickClick = (index) => {
    const [newGrid, newWinner] = Game.moveBrick(isGrid, index);
    setIsGrid([...newGrid]);
    setIsWinner(newWinner);
  };

  return (
    <>
      <Grid bricks={isGrid} onClick={onBrickClick} />
      <Button restart={() => setIsGrid(Game.reset())} />
      {isWinner ? <Message content={content} /> : ''}
    </>
  );
};

export default Puzzle;
