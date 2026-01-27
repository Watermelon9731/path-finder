import {
  END_CELL_CONFIGURATION,
  START_CELL_CONFIGURATION,
} from "@/utils/constants/grid";
import { CellType, SpeedType } from "@/utils/types";
import { create } from "zustand";

interface SpeedStoreInterface {
  speed: SpeedType;
}

interface Actions {
  setSpeed: (speed: SpeedType) => void;
}

type Store = SpeedStoreInterface & Actions;

export const useSpeed = create<Store>()((set) => ({
  speed: "1",
  setSpeed: (speed: SpeedType) => set({ speed }),
}));
