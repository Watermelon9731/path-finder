import { MAX_ROWS, MAX_COLS } from "../constants/grid";
import { CellType, GridType } from "../types";

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
  const grid: GridType[] = [];
  for (let row = 0; row < MAX_ROWS; row++) {
    const newRow = createRow(row, startCell, endCell);
    grid.push(newRow);
  }
  return grid;
};
