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
      <div v-else-if="cell.notes.length > 0" class="cell-notes">
        <div
          v-for="note in cell.notes"
          :key="note"
          class="note"
          :class="getNoteClass(note)"
        >
          {{ note }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { handleKeyEvents } from "../helpers/keyevents";
import { changeCurrentCell } from "../helpers/modifygrid";

export default {
  computed: mapState({
    Grid: (state) => state.Grid,
  }),
  // Checks to see if 1 through 9 are pressed, then calls a function that changes the current cell's value
  created() {
    // All changes to the grid based on keyboard input are handled here
    window.addEventListener("keydown", this.keyEvent, false);
  },
  unmounted() {
    window.removeEventListener("keydown", this.keyEvent, false);
  },
  methods: {
    // Listener event
    keyEvent(event) {
      handleKeyEvents(event, this.Grid);
    },

    // Returns a class based on cell properties
    getCellClass(cell) {
      // Mix styles if both current and invalid
      if (!cell.isValid && cell.isCurrentCell) {
        return "invalid-current-cell";
      } else if (!cell.isValid) {
        return "invalid-cell";
      }
      return {
        "current-cell": cell.isCurrentCell,
      };
    },
    // Return a class based on note properties
    getNoteClass(note) {
      return "note" + note;
    },
    // Change the current cell
    changeCurrentCell(number) {
      changeCurrentCell(
        number,
        this.Grid,
        this.Grid.Cells[this.Grid.currentCell - 1]
      );
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

.cell-notes {
  width: 100%;
  font-size: 1rem;
  color: black;
  padding: 0.5rem;
  position: relative;
}

.current-cell {
  background-color: rgb(209, 237, 255);
}

.invalid-cell {
  background-color: rgb(255, 181, 181);
}

.invalid-current-cell {
  background-color: rgb(237, 201, 251);
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

/* Conditional cell note styling. It isn't very elegant, but I had to use nine different sub classes so the numbers stay in the same spot every time. */

.note {
  position: absolute;
}

.note2 {
  left: 2.15rem;
}

.note3 {
  right: 0.8rem;
}

.note4 {
  top: 2rem;
}

.note5 {
  top: 2rem;
  left: 2.15rem;
}

.note6 {
  top: 2rem;
  right: 0.8rem;
}

.note7 {
  top: 3.5rem;
}

.note8 {
  top: 3.5rem;
  left: 2.15rem;
}

.note9 {
  top: 3.5rem;
  right: 0.8rem;
}

/* This is a weird trick to make the height of each cell match the width */
.cell:before {
  content: "";
  float: left;
  padding-top: 100%;
}
</style>