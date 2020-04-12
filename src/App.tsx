import React from 'react'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'
import { NotFound } from './presentation/pages/NotFound'
import { ScrollTop } from './presentation/component/ScrollTop'
import topRoutes from './presentation/router/Top'
import homeRoutes from './presentation/router/Home'
import {
  AppBar,
  Toolbar,
} from '@material-ui/core'

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
