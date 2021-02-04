const gridSize = 16;

export const Game = {
  init() {
    let bricks = [...Array(gridSize).keys()].map((x) => x + 1);
    bricks.sort(() => (Math.random() > 0.5 ? 1 : -1));
    return bricks;
  },
  reset() {
    return this.init();
  },
  moveBrick(grid, index) {
    const emptyBrick = grid.indexOf(gridSize);
    isBrickClose(index, emptyBrick, grid.length) &&
      swap(grid, index, emptyBrick);
    return [grid, this.isWinner(grid)];
  },
  isWinner(grid) {
    const isWinner = grid
      .slice(0, grid.length - 1)
      .every((brick, index) => brick === index + 1);
    return isWinner;
  },
};

export const getCoords = (index) => ({
  row: Math.floor(index / Math.sqrt(gridSize)),
  column: Math.floor(index % Math.sqrt(gridSize)),
});

export const isBrickClose = (index, emptyBrick) => {
  const brickCoords = getCoords(index);
  const emptyCoords = getCoords(emptyBrick);

  const sameRow = brickCoords.row === emptyCoords.row;
  const adjacentRow = Math.abs(brickCoords.row - emptyCoords.row) === 1;
  const sameColumn = brickCoords.column === emptyCoords.column;
  const adjacentColumn =
    Math.abs(brickCoords.column - emptyCoords.column) === 1;

  return (sameRow && adjacentColumn) || (sameColumn && adjacentRow);
};

export const swap = (array, index, swapIndex) => {
  [array[index], array[swapIndex]] = [array[swapIndex], array[index]];
};
