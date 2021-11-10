export default class Cell {
  constructor(number, row, column, block, value = "", notes = []) {
    this.number = number;
    this.row = row;
    this.column = column;
    this.block = block;
    this.value = value;
    this.notes = notes;
    this.isCurrentCell = false;
    this.isValid = true;
  }

  setValue (value) {
    this.value = value;
  }

  setCurrentCell (isCurrent) {
    this.isCurrentCell = isCurrent;
  }

  setIsValid (isValid) {
    this.isValid = isValid;
  }

  setNotes (notes) {
    this.notes = notes;
  }
}