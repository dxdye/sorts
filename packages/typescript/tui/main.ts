import { crayon } from "@crayon";
import { Canvas, Tui } from "@tui";

export const runTui = () => {
  const tui = new Tui({
    style: crayon.bgBlack, // Make background black
    refreshRate: 1000 / 60, // Run in 60FPS
  });

  tui.dispatch(); // Close Tui on CTRL+C
};
