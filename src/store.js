import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counterSlice"
import peopleReducer from "./PeopleSlice"

// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query"
import { pokemonApi } from "./pokemonApi"
export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,

    counter: counterReducer,
    people: peopleReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
})

setupListeners(store.dispatch)
console.log(store.getState())
