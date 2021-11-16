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
  Grid.Cells[Grid.currentCell - 1].setCurrentCell(true);
}
// changes the current cell's value
export function changeCellValue (value, Grid, selectedCell) {
  // If the value is the same as the previous value, delete the value instead
  if (value == selectedCell.value) {
    selectedCell.setValue("");
    updateGridValidity(Grid);
    return
  }

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
      // Check if it is the only note left in array
      if (selectedCell.notes.length < 2) {
        // Set notes to a blank array
        selectedCell.setNotes([])
        return
      }
      // Remove element
      newCellNotes.splice(i, 1)
      selectedCell.setNotes(newCellNotes)
      return
    }
  }

  // Add value to notes and sort
  newCellNotes.push(value)
  newCellNotes.sort()
  selectedCell.setNotes(newCellNotes)
}