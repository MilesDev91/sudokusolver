import Cell from './Cell'

export default class Grid {
  constructor() {
    this.numberofCells = 81
    this.Cells = [];
    // To create a sudoku grid, we must construct 81 cells. I have decided to keep row, column, and block properties in the Cell class

    // This variable tracks cell count
    var cellCount = 1;

    // This variable tracks columns
    var colCount = 1;

    // This variable tracks rows
    var rowCount = 1;

    // This tracks blocks
    var blockCount = 1;

    // Now we just cycle through 81 cell creations
    while (cellCount <= this.numberofCells) {

      // We want to go left to right, top to bottom, so we cycle through columns then go to the next row
      while (colCount <= 9) {
        // Check block count
        blockCount = this.#checkBlock(cellCount)

        // Construct and add new cell to the cell array
        this.Cells.push(new Cell(cellCount, rowCount, colCount, blockCount))

        colCount++
        cellCount++
      }
      colCount = 1
      rowCount++
    }
    console.log(this.Cells)
  }
  // We check which block a cell should be constructed in here
  #checkBlock (cellCount) {
    // This is the best way I could think to do it. I guarantee there is a better way.
    const block1 = [1, 2, 3, 10, 11, 12, 19, 20, 21]
    const block2 = [4, 5, 6, 13, 14, 15, 22, 23, 24]
    const block3 = [7, 8, 9, 16, 17, 18, 25, 26, 27]
    const block4 = [28, 29, 30, 37, 38, 39, 46, 47, 48]
    const block5 = [31, 32, 33, 40, 41, 42, 49, 50, 51]
    const block6 = [34, 35, 36, 43, 44, 45, 52, 53, 54]
    const block7 = [55, 56, 57, 64, 65, 66, 73, 74, 75]
    const block8 = [58, 59, 60, 67, 68, 69, 76, 77, 78]
    const block9 = [61, 62, 63, 70, 71, 72, 79, 80, 81]

    if (block1.includes(cellCount)) {
      return 1;
    }
    if (block2.includes(cellCount)) {
      return 2;
    }
    if (block3.includes(cellCount)) {
      return 3;
    }
    if (block4.includes(cellCount)) {
      return 4;
    }
    if (block5.includes(cellCount)) {
      return 5;
    }
    if (block6.includes(cellCount)) {
      return 6;
    }
    if (block7.includes(cellCount)) {
      return 7;
    }
    if (block8.includes(cellCount)) {
      return 8;
    }
    if (block9.includes(cellCount)) {
      return 9;
    }
  }
}