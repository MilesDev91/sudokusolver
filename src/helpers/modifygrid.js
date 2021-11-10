import { updateGridValidity } from "./validity";

// Change current cell
export function changeCurrentCell (number, Grid, selectedCell) {
  // Change negative input into 1
  if (number < 1) {
    number = 1;
  }

  // Change anything over 81 into 81
  if (number > 81) {
    number = 81;
  }

  // Remove old current cell
  selectedCell.setCurrentCell(false);

  // Set new current cell
  Grid.currentCell = number;
  selectedCell.setCurrentCell(true);
}
// changes the current cell's value
export function changeCellValue (value, Grid, selectedCell) {
  selectedCell.setValue(value);
  updateGridValidity(Grid);
}
// Changes notes in the cell
export function changeCellNotes (value, selectedCell) {
  // Copy notes to avoid direct mutation
  var newCellNotes = [...selectedCell.notes]

  // Check notes for value and remove if true
  for (let i in selectedCell.notes) {
    if (selectedCell.notes[i] == value) {
      newCellNotes.splice(i, i)
      selectedCell.setNotes(newCellNotes)
      return
    }
  }

  // Add value to notes
  newCellNotes = [...selectedCell.notes]
  newCellNotes.push(value)
  selectedCell.setNotes(newCellNotes)
}