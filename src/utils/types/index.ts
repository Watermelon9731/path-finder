export type AlgorithmType = "dfs" | "bfs" | "astar" | "dijkstra";

export type MazeType =
  | "none"
  | "binary_tree"
  | "sidewinder"
  | "hunt_and_kill"
  | "recursive_division";

export type CellType = {
  row: number;
  col: number;
  isWall: boolean;
  isPath: boolean;
  isStart: boolean;
  isEnd: boolean;
};

export type GridType = CellType[];
