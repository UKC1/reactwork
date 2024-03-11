import { createSlice } from "@reduxjs/toolkit";

let user2 = createSlice({
  name : 'user2',
  initialState : {name:'kim', age:20},
  reducers : {
    changeObj(state) {
      state.name = 'park'
    },
    increase(state, num) {
      state.age += num.payload
    }
  }
})

export let { changeObj, increase } = user2.actions
export default user2