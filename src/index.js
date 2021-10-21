import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const Global = createGlobalStyle`
* {margin: 0;
padding: 0;
box-sizing: border-box;
font-family: "consolas";

}
`
const theme = {
  colors: {
    primary: 'blue',
    secondary: 'red',
  },
  media: {
    phone: '(max-width: 425px)',
    tablet: '(max-width: 768px) and  (min-width: 425px)',
  },
}
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
