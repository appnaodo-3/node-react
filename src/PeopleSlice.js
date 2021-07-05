import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  name: "",
  age: 0,
}

export const peopleSlide = createSlice({
  name: "people",
  initialState,
  reducers: {
    changeName: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log(action.payload)
      state.name = action.payload
    },
    changeAge: (state) => {},
  },
})

// Action creators are generated for each case reducer function
export const { changeName, changeAge } = peopleSlide.actions

export default peopleSlide.reducer
