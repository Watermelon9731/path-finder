"use client";
import Grid from "@/components/grid/Grid";
import Navigation from "@/components/navigation/Navigation";
import { useRef } from "react";

export default function Home() {
  const isVisualizationRunningRef = useRef(false);

  return (
    <div className="h-screen w-screen flex flex-col">
      <Navigation />
      <Grid isVisualizationRunning={isVisualizationRunningRef} />
    </div>
  );
}
