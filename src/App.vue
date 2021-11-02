<template>
  <div id="app">
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
