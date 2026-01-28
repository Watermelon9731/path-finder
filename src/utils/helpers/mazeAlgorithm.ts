import { binaryTree } from "../libs/algorithm/binary-tree";
import { GridType, MazeType, SpeedType } from "../types";

export const runMazeAlgorithm = async (
  grid: GridType,
  maze: MazeType,
  setGrid: (grid: GridType) => void,
  speed: SpeedType,
  setIsDisabled: (isDisabled: boolean) => void,
) => {
  switch (maze) {
    case "binary_tree":
      await binaryTree(grid, setGrid, speed, setIsDisabled);
      break;
    case "sidewinder":
      break;
    case "hunt_and_kill":
      break;
    case "recursive_division":
      break;
    default:
      break;
  }
};
