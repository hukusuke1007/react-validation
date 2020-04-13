import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import ThemeProvider from './presentation/theme/ThemeProvider'
import { Global, css } from '@emotion/core'

ReactDOM.render(
  // 
  <ThemeProvider>
    <Global
      styles={css`
        html,
        body,
        #root {
          height: 100%;
        }
        p {
          margin-top: 0;
        }
      `}
    />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
