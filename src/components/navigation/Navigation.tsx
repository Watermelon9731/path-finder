import React, { useState } from "react";
import { PlayButton } from "./play-button/PlayButton";
import Select from "./select/Select";
import { MAZES } from "@/utils/constants/grid";
import { usePathfinding } from "@/store/usePathfinding";
import { MazeType } from "@/utils/types";
import { resetGrid } from "@/utils/helpers/grid";
import { useCell } from "@/store/useCell";

export default function Navigation() {
  const [isDisabled, setIsDisabled] = useState(false);
  const { maze, setMaze, grid } = usePathfinding((state) => state);
  const { startCell, endCell } = useCell((state) => state);

  const handleMazeChange = (maze: MazeType) => {
    if (maze === "none" || maze === maze) {
      setMaze(maze);
      resetGrid(grid, startCell, endCell);
      return;
    }

    setMaze(maze);
  };

  return (
    <div className="flex items-center justify-center min-h-18 border-b shadow-gray-300 sm:px-5 px-0">
      <div className="flex items-center lg:justify-between w-full sm:w-208">
        <h1 className="lg:flex hidden w-[40%] text-2xl pl-1">
          Path Finding Visualizer
        </h1>

        <div className="flex items-center gap-2">
          <Select
            value={maze}
            label="Maze"
            onChange={(e) => handleMazeChange(e.target.value as MazeType)}
            options={MAZES}
          />
        </div>

        <div className="flex items-center gap-2">
          <PlayButton
            handlerRunVisualizer={() => {}}
            isDisabled={false}
            isGraphVisualized={false}
          />
        </div>
      </div>
    </div>
  );
}
