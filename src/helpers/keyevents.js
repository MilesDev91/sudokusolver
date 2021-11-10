import { changeCellValue, changeCurrentCell, changeCellNotes } from "./modifygrid";

// Checks key code for key events, returns new current cell at the end
export function handleKeyEvents (e, Grid) {
  var selectedCell = Grid.Cells[Grid.currentCell - 1]

  // Checks for number which changes cell value
  if (e.key < 10 && e.key > 0) {
    if (e.code == ("ControlLeft" || "ControlRight")) {
      changeCellNotes(e.key, selectedCell)
    } else {
      changeCellValue(e.key, Grid, selectedCell);
    }
  }
  // Checks for backspace which clears cell
  if (e.code == "Backspace") {
    changeCellValue("", Grid, selectedCell);
  }

  /* Checks for directional input, which changes current cell */
  // Handle up direction by reducing current cell by 9 or down to 1
  if (e.code == "ArrowUp") {
    if (!wrapsAround(e.code)) {
      changeCurrentCell(Grid.currentCell - 9, Grid, selectedCell);
    }
  }
  // Handle down direction by increasing current cell by 9 or up to 81
  if (e.code == "ArrowDown") {
    if (!wrapsAround(e.code, Grid.currentCell)) {
      changeCurrentCell(Grid.currentCell + 9, Grid, selectedCell);
    }
  }
  // Handle right and left by increasing or decreasing current cell by 1 respectively
  if (e.code == "ArrowRight") {
    if (!wrapsAround(e.code, Grid.currentCell)) {
      changeCurrentCell(Grid.currentCell + 1, Grid, selectedCell);
    }
  }
  if (e.code == "ArrowLeft") {
    if (!wrapsAround(e.code, Grid.currentCell)) {
      changeCurrentCell(Grid.currentCell - 1, Grid, selectedCell);
    }
  }

  return
}
// Checks for wrap around when changing cells with arrow keys
function wrapsAround (key, currentCell) {
  // Up key
  if (key == "ArrowUp") {
    if (currentCell <= 9) {
      return true;
    }
  }
  // Down key
  if (key == "ArrowDown") {
    if (currentCell >= 73) {
      return true;
    }
  }
  // Left key
  if (key == "ArrowLeft") {
    if ((currentCell - 1) % 9 == 0) {
      return true;
    }
  }
  // Right key
  if (key == "ArrowRight") {
    if (currentCell % 9 == 0) {
      return true;
    }
  }

  // If the code makes it here, the movement will not wrap around, so we return false
  return false;
}