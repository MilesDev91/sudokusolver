import { createStore } from 'vuex'
import Grid from '../classes/Grid'


export default createStore({
  state () {
    return {
      Grid: new Grid()
    }
  }
})