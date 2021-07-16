import { createSlice } from "@reduxjs/toolkit"
import getDate from "../helper/getDate"

const initialState = {
  setting: {
    theme: {
      background: "darkslategray",
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
      state.notes = [...state.notes, { id, content: "", theme: "DEFAULT", status: false, date: getDate(new Date()) }]
    },
    updateNote: (state, action) => {
      const {
        payload: { id, content, status, date },
      } = action

      state.notes = state.notes.map((note) => {
        if (note.id === id) {
          console.log("---", note)
          return {
            ...note,
            id,
            content: content,
            status: status,
            date: date,
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
    updateAllNotes: (state, action) => {
      const { payload: notes } = action
      state.notes = notes
    },
    settingTheme: (state, action) => {
      const {
        payload: { color },
      } = action
      state.setting.theme.background = color
    },
  },
})

// Action creators are generated for each case reducer function
export const { addNote, deleteNote, updateNote, updateAllNotes, settingTheme } = noteSlice.actions

export default noteSlice.reducer
