import { crayon } from "@crayon";
import { Button, Label, LabelRectangle, Table } from "@tui/components";
import { Computed, Signal } from "@tui";
import { sortAlgorithmInfos } from "./src/sortingInfo.ts";
import {
  Canvas,
  handleInput,
  handleKeyboardControls,
  handleMouseControls,
  Tui,
} from "@tui";

export const tui = () => {
  const tui = new Tui({
    style: crayon.bgBlack, // Make background black
    refreshRate: 1000 / 60, // Run in 60FPS
  });

  handleInput(tui);
  handleMouseControls(tui);
  handleKeyboardControls(tui);

  // Create signal to make number automatically reactive
  const number = new Signal(0);

  new Label({
    parent: tui,
    text: "Sorts: visualize sorting algorithms",
    align: {
      horizontal: "center",
      vertical: "center",
    },
    theme: {
      base: crayon.magenta,
    },
    rectangle: {
      column: 1,
      row: 1,
    },
    zIndex: 0,
  });
  const table = new Table({
    parent: tui,
    theme: {
      base: crayon.bgBlack.white,
      frame: { base: crayon.bgBlack },
      header: { base: crayon.bgBlack.bold.lightBlue },
      selectedRow: {
        base: crayon.bold.bgBlue.white,
        focused: crayon.bold.bgLightBlue.white,
        active: crayon.bold.bgMagenta.black,
      },
    },
    rectangle: {
      column: 2,
      row: 5,
      height: 30,
    },
    headers: [
      { title: "Index" },
      { title: "Name" },
      { title: "Avg. Complexity" },
      { title: "Method" },
      { title: "Is inplace" },
    ],
    data: sortAlgorithmInfos.map((info, index) => [
      String(index),
      info.description,
      info.timeComplexity,
      info.method,
      info.isInplace ? "Yes" : "No",
    ]),
    charMap: "rounded",
    zIndex: 0,
  });
  table.on("keyPress", (index) => {
  });

  tui.dispatch();
  return tui;
};
