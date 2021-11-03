<template>
  <div class="title">Sudoku Solver</div>
  <div class="app">
    <div class="sudoku-container">
      <div class="grid">
        <Grid />
      </div>
      <div class="input-keypad">
        <InputKeypad />
      </div>
    </div>
    <div class="solve-info">
      <SolveInfo />
    </div>
  </div>
</template>

<script>
import Grid from "./components/Grid.vue";
import InputKeypad from "./components/InputKeypad.vue";
import SolveInfo from "./components/SolveInfo.vue";

export default {
  name: "App",
  components: {
    Grid,
    InputKeypad,
    SolveInfo,
  },
};
</script>

<style>
body {
  background-color: rgb(36, 36, 36);
  color: rgb(214, 214, 214);
  margin: 0;
  min-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 1.2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  flex-grow: 1;
}

.title {
  width: 100%;
  text-justify: 100%;
  font-size: 1.4rem;
  padding: 2rem 0;
  background-color: rgb(22, 22, 22);
}

.sudoku-container {
  border-top: 2px solid black;
  padding-top: 1rem;
  flex-grow: 2;
  position: relative;
}

.solve-info {
  padding: 0.3rem;
  flex-grow: 1;
  background-color: rgb(22, 22, 22);
  border: 2px solid black;
}

.input-keypad {
  position: absolute;
  left: 1rem;
  top: 50%;
}
</style>
