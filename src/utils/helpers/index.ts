import { CellType } from "../types";

export const isEqual = (cell1: CellType, cell2: CellType) => {
  return cell1.row === cell2.row && cell1.col === cell2.col;
};

export const isRowAndColEqual = (row: number, col: number, cell: CellType) => {
  return row === cell.row && col === cell.col;
};
