import React from 'react'
import { BrowserRouter, Switch, Route, Redirect, } from 'react-router-dom'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enJson from './common/i18n/en.json'
import jaJson from './common/i18n/ja.json'
import { NotFound } from './presentation/pages/NotFound'
import { ScrollTop } from './presentation/component/ScrollTop'
import topRoutes from './presentation/router/Top'
import homeRoutes from './presentation/router/Home'
import {
  AppBar,
  Toolbar,
} from '@material-ui/core'

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

const App = () => {
  const isAuth = true
  return (
    <BrowserRouter>
      <Switch>
        {topRoutes.map((config, i) => (
          <Route 
            key={i} 
            path={config.path}
            exact={config.exact}
            children={config.children}
          />
        ))}

        {/* home配下でルーティング */}
        {/* https://stackoverflow.com/questions/41474134/nested-routes-with-react-router-v4-v5/49321289#49321289 */}
        <Route 
          path='/home'  
          render={({ match: { url } }) => 
            (
              <>
              <AppBar position="static">
                <Toolbar>
                  AppBar
                </Toolbar>
              </AppBar>
              <ScrollTop />
              <Switch>
                {homeRoutes.map((config, i) => (
                  <Route 
                    key={i}
                    path={`${url}${config.path}`}
                    exact={config.exact}
                    children={isAuth ? config.children : <Redirect to={'/'}/>}
                  />
                ))}
              </Switch>
              </>
            )
          }>
        </Route>

        {/* 404 */}
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
