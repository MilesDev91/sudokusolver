<template>
  <div class="grid">
    <!-- The tabindex property was added to allow for focus highlighting the entire div -->
    <div
      v-for="cell in Grid.Cells"
      :key="cell"
      class="cell"
      v-bind:class="getCellClass(cell)"
      @click="changeCurrentCell(cell.number)"
    >
      <div v-if="cell.value != ''" class="cell-value">
        {{ cell.value }}
      </div>
      <div v-else class="cell-value">
        {{ cell.notes }}
      </div>
    </div>
  </div>
</template>

<script>
import Grid from "../classes/Grid";
import { handleKeyEvents } from "../helpers/keyevents";
import { changeCurrentCell } from "../helpers/modifygrid";

export default {
  data() {
    return {
      Grid: new Grid(),
    };
  },
  // Checks to see if 1 through 9 are pressed, then calls a function that changes the current cell's value
  created() {
    // All changes to the grid based on keyboard input are handled here
    window.addEventListener("keydown", (e) => {
      handleKeyEvents(e, this.Grid);
    });
  },
  methods: {
    // Returns a class based on cell properties
    getCellClass(cell) {
      if (!cell.isValid) {
        return "invalid-cell";
      }
      return {
        "current-cell": cell.isCurrentCell,
      };
    },
    // Change the current cell
    changeCurrentCell(number) {
      changeCurrentCell(number, this.Grid);
    },
  },
};
</script>

<style scoped>
.grid {
  padding: 1rem 11rem 1rem 20rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.cell {
  background-color: white;
  width: 10%;
  position: relative;
  display: flex;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
}

.cell-value {
  margin: auto;
  font-size: 3rem;
  color: black;
}

.current-cell {
  background-color: rgb(209, 237, 255);
}

.invalid-cell {
  background-color: rgb(255, 137, 137);
}

.cell-value:hover {
  cursor: default;
}

/* Conditional cell styling */

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