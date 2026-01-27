export const MAX_ROWS = 39;
export const MAX_COLS = 39;
export const MIN_ROWS = 5;
export const MIN_COLS = 5;

export const START_CELL_CONFIGURATION = {
  row: 1,
  col: 1,
  isEnd: false,
  isStart: false,
  isPath: false,
  isWall: false,
  distance: 0,
  parent: null,
  isVisited: false,
};
export const END_CELL_CONFIGURATION = {
  row: MAX_ROWS - 2,
  col: MAX_COLS - 2,
  isEnd: false,
  isStart: false,
  isPath: false,
  isWall: false,
  distance: 0,
  parent: null,
  isVisited: false,
};
