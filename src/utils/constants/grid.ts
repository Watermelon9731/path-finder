import { CellType, MazeSelectType, SpeedSelectType } from "../types";

export const MAX_ROWS = 39;
export const MAX_COLS = 39;
export const MIN_ROWS = 5;
export const MIN_COLS = 5;

export const START_CELL_CONFIGURATION: CellType = {
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
export const END_CELL_CONFIGURATION: CellType = {
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

export const MAZES: MazeSelectType[] = [
  { name: "No Maze", value: "none" },
  { name: "Binary Tree", value: "binary_tree" },
  { name: "Recursive Division", value: "recursive_division" },
  { name: "Sidewinder", value: "sidewinder" },
  { name: "Hunt and Kill", value: "hunt_and_kill" },
];

export const SPEEDS: SpeedSelectType[] = [
  { name: "Fast", value: 3 },
  { name: "Medium", value: 2 },
  { name: "Slow", value: 1 },
];
