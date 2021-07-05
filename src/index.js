import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { store } from "./store"
import { Provider } from "react-redux"

const theme = {
  main: "white",
  black: "black",
}

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.black};
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
