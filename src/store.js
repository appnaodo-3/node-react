import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"

import counterReducer from "./counterSlice"
import peopleReducer from "./PeopleSlice"
// Or from '@reduxjs/toolkit/query/react'
import { pokemonApi } from "./pokemonApi"
import noteReducer from "./Container/noteSlice"
export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,

    counter: counterReducer,
    people: peopleReducer,
    note: noteReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
})

setupListeners(store.dispatch)
console.log(store.getState())
