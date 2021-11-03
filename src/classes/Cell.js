export default class Cell {
  constructor(number, row, column, block, value = "") {
    this.number = number;
    this.row = row;
    this.column = column;
    this.block = block;
    this.value = value
  }

  setValue (value) {
    this.value = value;
  }
}