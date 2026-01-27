import {
  END_CELL_CONFIGURATION,
  START_CELL_CONFIGURATION,
} from "@/utils/constants/grid";
import { CellType } from "@/utils/types";
import { create } from "zustand";

interface CellStoreInterface {
  startCell: CellType;
  endCell: CellType;
}

interface Actions {
  setStartCell: (startCell: CellType) => void;
  setEndCell: (endCell: CellType) => void;
}

type Store = CellStoreInterface & Actions;

export const useCell = create<Store>()((set) => ({
  startCell: START_CELL_CONFIGURATION,
  endCell: END_CELL_CONFIGURATION,
  setStartCell: (startCell: CellType) => set({ startCell }),
  setEndCell: (endCell: CellType) => set({ endCell }),
}));
