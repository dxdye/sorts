import { crayon } from "https://deno.land/x/crayon@3.3.3/mod.ts";
import { Canvas, Tui } from "https://deno.land/x/tui@2.1.11/mod.ts";

export const runTui = () => {
  const tui = new Tui({
    style: crayon.bgBlack, // Make background black
    refreshRate: 1000 / 60, // Run in 60FPS
  });

  tui.dispatch(); // Close Tui on CTRL+C
};
