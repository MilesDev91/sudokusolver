<template>
  <div class="grid">
    <div
      v-for="cell in Grid.Cells"
      :key="cell"
      class="cell"
      tabindex="0"
      @click="changeCurrentCell(cell.number)"
    >
      <div class="cell-value">{{ cell.value }}</div>
    </div>
  </div>
</template>

<script>
import Grid from "../classes/Grid";

export default {
  data() {
    return {
      Grid: new Grid(),
      currentCell: 1,
    };
  },
  // Checks to see if 1 through 9 are pressed, then calls a function that changes the current cell's value
  created() {
    window.addEventListener("keydown", (e) => {
      // Checks for number which changes cell value
      if (e.key < 10 && e.key > 0) {
        this.changeCellValue(e.key);
      }
      // Checks for backspace which clears cell
      if (e.code == "Backspace") {
        this.changeCellValue("");
      }
    });
  },
  methods: {
    // Change current cell
    changeCurrentCell(number) {
      this.currentCell = number;
    },
    // changes the current cell's value
    changeCellValue(value) {
      this.Grid.Cells[this.currentCell - 1].setValue(value);
    },
  },
};
</script>

<style scoped>
.grid {
  padding: 1rem 15rem 1rem 25rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.cell {
  background-color: white;
  width: 10%;
  position: relative;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  text-align: center;
}

.cell-value {
  max-width: 100%;
}

/* Conditional cell styling */
.cell:focus-within {
  background-color: rgb(209, 237, 255);
}

.cell:nth-child(3n) {
  border-right: 2px solid black;
}

.cell:nth-child(9n) {
  border-right: none;
}

.cell:nth-child(n + 19):nth-child(-n + 27) {
  border-bottom: 2px solid black;
}

.cell:nth-child(n + 46):nth-child(-n + 54) {
  border-bottom: 2px solid black;
}

/* This is a weird trick to make the height of each cell match the width */
.cell:before {
  content: "";
  float: left;
  padding-top: 100%;
}
</style>