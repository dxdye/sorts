import { crayon } from "@crayon";
import { Button, Label, LabelRectangle, Table } from "@tui/components";
import { Computed, Signal } from "@tui";
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
  new Table({
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
      column: 1,
      row: 1,
      height: 209,
    },
    headers: [
      { title: "ID" },
      { title: "Name" },
    ],
    data: [
      ["0", "Thomas Jeronimo"],
      ["1", "Jeremy Wanker"],
      ["2", "Julianne James"],
      ["3", "Tommie Moyer"],
      ["4", "Marta Reilly"],
      ["5", "Bernardo Robertson"],
      ["6", "Hershel Grant"],
    ],
    charMap: "rounded",
    zIndex: 0,
  });

  const button = new Button({
    parent: tui,
    zIndex: 0,
    label: {
      text: new Computed(() => number.value.toString()), // cast number to string
    },
    theme: {
      base: crayon.bgRed,
      focused: crayon.bgLightRed,
      active: crayon.bgYellow,
    },
    rectangle: {
      column: 1,
      row: 1,
      height: 5,
      width: 10,
    },
  });

  // If button is active (pressed) make number bigger by one
  button.state.when("active", (state) => {
    ++number.value;
  });

  // Listen to mousePress event
  button.on("mousePress", ({ drag, movementX, movementY }) => {
    if (!drag) return;

    // Use peek() to get signal's value when it happens outside of Signal/Computed/Effect
    const rectangle = button.rectangle.peek();
    // Move button by how much mouse has moved while dragging it
    rectangle.column += movementX;
    rectangle.row += movementY;
  });

  tui.dispatch();
  return tui;
};
