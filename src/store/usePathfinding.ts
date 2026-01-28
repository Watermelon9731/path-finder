import {
  END_CELL_CONFIGURATION,
  START_CELL_CONFIGURATION,
} from "@/utils/constants/grid";
import { createGrid } from "@/utils/helpers/grid";
import { AlgorithmType, GridType, MazeType } from "@/utils/types";
import { create } from "zustand";

interface PathfindingStoreInterface {
  algorithm: AlgorithmType;
  maze: MazeType;
  grid: GridType;
  isGraphVisualize: boolean;
}

interface Actions {
  setAlgorithm: (algorithm: AlgorithmType) => void;
  setMaze: (maze: MazeType) => void;
  setGrid: (grid: GridType) => void;
  setIsGraphVisualize: (isGraphVisualize: boolean) => void;
}

type Store = PathfindingStoreInterface & Actions;

export const usePathfinding = create<Store>()((set) => ({
  algorithm: "bfs",
  maze: "none",
  grid: createGrid(START_CELL_CONFIGURATION, END_CELL_CONFIGURATION),
  isGraphVisualize: false,
  setAlgorithm: (algorithm: AlgorithmType) => set({ algorithm }),
  setMaze: (maze: MazeType) => set({ maze }),
  setGrid: (grid: GridType) => set({ grid }),
  setIsGraphVisualize: (isGraphVisualize: boolean) => set({ isGraphVisualize }),
}));
