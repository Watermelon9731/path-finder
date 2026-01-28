import {
  MAX_ROWS,
  MAX_COLS,
  START_CELL_CONFIGURATION,
  END_CELL_CONFIGURATION,
} from "../constants/grid";
import { CellType, GridType, SpeedType } from "../types";

export const createRow = (
  row: number,
  startCell: CellType,
  endCell: CellType,
) => {
  const currentRow: CellType[] = [];
  for (let col = 0; col < MAX_COLS; col++) {
    currentRow.push({
      row,
      col,
      isWall: false,
      isPath: false,
      isStart: row === startCell.row && col === startCell.col,
      isEnd: row === endCell.row && col === endCell.col,
      distance: Infinity,
      parent: null,
      isVisited: false,
    });
  }
  return currentRow;
};

export const createGrid = (startCell: CellType, endCell: CellType) => {
  const grid: GridType = [];
  for (let row = 0; row < MAX_ROWS; row++) {
    const newRow = createRow(row, startCell, endCell);
    grid.push(newRow);
  }
  return grid;
};

export const checkStartOrEnd = (row: number, col: number) => {
  return (
    (row === 1 && col === 1) || (row === MAX_ROWS - 2 && col === MAX_COLS - 2)
  );
};

export const createNewGrid = (grid: GridType, row: number, col: number) => {
  const newGrid = grid.map((row) => [...row]);
  newGrid[row][col].isWall = true;
  return newGrid;
};

export const resetGrid = (
  grid: GridType,
  startCell = START_CELL_CONFIGURATION,
  endCell = END_CELL_CONFIGURATION,
) => {
  const newGrid = grid.map((row) => [...row]);
  for (let row = 0; row < MAX_ROWS; row++) {
    for (let col = 0; col < MAX_COLS; col++) {
      newGrid[row][col].isWall = false;
      newGrid[row][col].isPath = false;
      newGrid[row][col].isStart =
        row === startCell.row && col === startCell.col;
      newGrid[row][col].isEnd = row === endCell.row && col === endCell.col;
      newGrid[row][col].distance = Infinity;
      newGrid[row][col].parent = null;
      newGrid[row][col].isVisited = false;
    }
  }
  return newGrid;
};

export const createWall = (
  startCell: CellType,
  endCell: CellType,
  speed: SpeedType,
) => {};
