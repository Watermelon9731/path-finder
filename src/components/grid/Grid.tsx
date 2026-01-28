"use client";
import { usePathfinding } from "@/store/usePathfinding";
import { MAX_COLS } from "@/utils/constants/grid";
import { cn } from "@/utils/helpers/cn";
import { checkStartOrEnd, createNewGrid } from "@/utils/helpers/grid";
import { MutableRefObject, useState } from "react";
import Tile from "./tile/Tile";

interface Props {
  isVisualizationRunning: MutableRefObject<boolean>;
}

export default function Grid({ isVisualizationRunning }: Props) {
  const { grid, setGrid } = usePathfinding((state) => state);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown = (row: number, col: number) => {
    if (isVisualizationRunning.current || checkStartOrEnd(row, col)) return;
    setIsMouseDown(true);
    const newGrid = createNewGrid(grid, row, col);
    setGrid(newGrid);
  };

  const handleMouseUp = (row: number, col: number) => {
    if (isVisualizationRunning.current || checkStartOrEnd(row, col)) return;
    setIsMouseDown(false);
  };

  const handleMouseEnter = (row: number, col: number) => {
    if (isVisualizationRunning.current || checkStartOrEnd(row, col)) return;
    if (isMouseDown) {
      const newGrid = createNewGrid(grid, row, col);
      setGrid(newGrid);
    }
  };

  return (
    <div className="w-full flex items-center justify-center p-4">
      <div
        className={cn(
          "grid gap-px bg-slate-900/50 p-4 rounded-xl border border-white/10 shadow-2xl backdrop-blur-sm mt-10",
        )}
        style={{
          gridTemplateColumns: `repeat(${MAX_COLS}, minmax(0, 1fr))`,
          width: "fit-content",
        }}
      >
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="w-4 h-4 xs:w-5 xs:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
            >
              <Tile
                key={`${cell.row}-${cell.col}`}
                {...cell}
                handleMouseDown={() => handleMouseDown(cell.row, cell.col)}
                handleMouseUp={() => handleMouseUp(cell.row, cell.col)}
                handleMouseEnter={() => handleMouseEnter(cell.row, cell.col)}
              />
            </div>
          )),
        )}
      </div>
    </div>
  );
}
