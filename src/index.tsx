import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import ThemeProvider from './presentation/theme/ThemeProvider'
import { Global, css } from '@emotion/core'
import { Provider } from 'react-redux'
import store from './presentation/redux/Store'
import firebase from 'firebase/app'
import * as Ballcap from '@1amageek/ballcap'
import 'firebase/firestore'

/* eslint-disable */
require('dotenv').config()

import { firebaseConfig } from './config/FirebaseConfig'

console.log('process_env', process.env)
/** Firebase */
Ballcap.initialize(firebase.initializeApp(firebaseConfig))

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
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
