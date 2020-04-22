import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import App from './App'
import * as serviceWorker from './serviceWorker'
/** DarkMode */
import ThemeProvider from './presentation/theme/ThemeProvider'
import { Global, css } from '@emotion/core'
/** Redux */
import { Provider } from 'react-redux'
import store from './Store'
/** Localized */
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enJson from './common/i18n/en.json'
import jaJson from './common/i18n/ja.json'
/** Firebase */
import firebase from 'firebase/app'
import * as Ballcap from '@1amageek/ballcap'
import 'firebase/firestore'
import { firebaseConfig } from './config/FirebaseConfig'

console.log('env', process.env)

/** Firebase */
Ballcap.initialize(firebase.initializeApp(firebaseConfig))

// Localized
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enJson, },
    ja: { translation: jaJson, },
  },
  lng: 'ja',
  fallbackLng: 'ja',
  interpolation: { escapeValue: false },
});

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
