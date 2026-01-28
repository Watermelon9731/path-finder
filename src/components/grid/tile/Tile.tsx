import { cn } from "@/utils/helpers/cn";
import { CellType } from "@/utils/types";

interface Props extends CellType {
  isStart: boolean;
  isEnd: boolean;
  isWall: boolean;
  isPath: boolean;
  isVisited: boolean;
  handleMouseDown: (row: number, col: number) => void;
  handleMouseUp: (row: number, col: number) => void;
  handleMouseEnter: (row: number, col: number) => void;
}

export default function Tile({
  row,
  col,
  isStart,
  isEnd,
  isWall,
  isPath,
  isVisited,
  handleMouseDown,
  handleMouseUp,
  handleMouseEnter,
}: Props) {
  const tileTypeStyle = (() => {
    switch (true) {
      case isStart:
        return "bg-purple-500 rounded-md scale-110 shadow-lg shadow-purple-500/50 ring-2 ring-purple-300 z-10";
      case isEnd:
        return "bg-cyan-500 rounded-md scale-110 shadow-lg shadow-cyan-500/50 ring-2 ring-cyan-300 z-10";
      case isWall:
        return "bg-slate-800 border-slate-900 scale-95 opacity-80";
      case isPath:
        return "bg-yellow-400 scale-105 rounded-sm shadow-md animate-pulse";
      case isVisited:
        return "bg-blue-400/30 rounded-full scale-50 opacity-50 duration-500";
      default:
        return "bg-white/5 hover:bg-white/10 border-white/5";
    }
  })();

  return (
    <div
      className={cn(
        "w-full h-full aspect-square transition-all duration-200 ease-in-out cursor-pointer",
        "flex items-center justify-center",
        tileTypeStyle,
      )}
      id={`cell-${row}-${col}`}
      onMouseDown={() => handleMouseDown(row, col)}
      onMouseUp={() => handleMouseUp(row, col)}
      onMouseEnter={() => handleMouseEnter(row, col)}
    />
  );
}
