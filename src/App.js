import "./App.css"
import { useSelector, useDispatch } from "react-redux"
import { decrement, increment } from "./counterSlice"
import { useGetPokemonByNameQuery, usePostPokemonByNameTestMutation } from "./pokemonApi"
import { useEffect } from "react"
import { changeName } from "./PeopleSlice"

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur")
  const [postPost, { data: dataPost, error: errorPost, isLoading: isLoadingPost }] = usePostPokemonByNameTestMutation()

  useEffect(() => {
    postPost({
      name: "test",
    })
  }, [])
  // console.log(isLoadingPost, errorPost, dataPost)

  // console.log("dataPost, errorPost, isLoadingPost", dataPost, errorPost, isLoadingPost)
  return (
    <div className="App">
      <div>
        <button
          onClick={() => {
            console.log(changeName())
            dispatch(changeName("change"))
          }}
        >
          change name
        </button>
      </div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>

      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  )
}

export default App
