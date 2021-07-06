import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  setting: {
    theme: {
      background: "",
    },
  },
  notes: [],
}

export const noteSlice = createSlice({
  name: "Notes",
  initialState,
  reducers: {
    addNote: (state) => {
      const id = state.notes.length + 1
      state.notes = [...state.notes, { id, content: "", theme: "DEFAULT", status: false }]
    },
    updateNote: (state, action) => {
      const {
        payload: { id, content, status },
      } = action

      state.notes = state.notes.map((note) => {
        if (note.id === id) {
          console.log("---", note)
          return {
            ...note,
            id,
            content: content,
            status: status,
          }
        }

        return { ...note }
      })
    },
    deleteNote: (state, action) => {
      const {
        payload: { id },
      } = action

      state.notes = state.notes.filter((note) => note.id !== id)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addNote, deleteNote, updateNote } = noteSlice.actions

export default noteSlice.reducer
