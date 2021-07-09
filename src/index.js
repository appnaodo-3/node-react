import React, { Suspense } from "react"
import ReactDOM from "react-dom"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { store } from "./store"
import { Provider } from "react-redux"
import ErrorBoundary from "./ErrorBoundary"

const theme = {
  main: "white",
  black: "black",
}

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.black};
  }
`

const AppPage = React.lazy(() => import("./App"))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <GlobalStyle />
          <Suspense fallback={<p style={{ color: "blue", fontSize: "18px" }}>loading...</p>}>
            <AppPage />
          </Suspense>
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
