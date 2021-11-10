// Checks entire grid and updates validity of cells
export function updateGridValidity (Grid) {
  // Clear invalid status
  clearInvalidity(Grid);

  // Checks each cell in the grid for invalid status, updating the status as needed
  for (let i in Grid.Cells) {
    if (!checkCellValidity(Grid, Grid.Cells[i])) {
      Grid.Cells[i].setIsValid(false);
    }
  }
}

// This function clears all cells of invalid status
function clearInvalidity (Grid) {
  for (let i in Grid.Cells) {
    Grid.Cells[i].setIsValid(true);
  }
}

// This function checks every row, block, and column for the same value as the Cell being checked. If it finds a match, the cell is invalid, so it returns false.
function checkCellValidity (Grid, Cell) {
  // Check for empty value
  if (Cell.value == "") {
    return true
  }
  var cellCount = 0;
  while (cellCount <= 80) {
    if (Grid.Cells[cellCount].value == Cell.value && Grid.Cells[cellCount].number != Cell.number) {
      // If numbers match, check for matching row, column, or block
      if (Grid.Cells[cellCount].row == Cell.row || Grid.Cells[cellCount].column == Cell.column || Grid.Cells[cellCount].block == Cell.block) {
        // A match was found, thus the cell is invalid
        return false
      }
    }
    cellCount++
  }
  return true
}