import 'reflect-metadata'
import React from 'react'
import { BrowserRouter, Switch, Route, Redirect, } from 'react-router-dom'
import { NotFound } from './presentation/pages/NotFound'
import { ScrollTop } from './presentation/component/ScrollTop'
import topRoutes from './presentation/router/Top'
import homeRoutes from './presentation/router/Home'
import {
  AppBar,
  Toolbar,
} from '@material-ui/core'
import Styled from './presentation/theme/Styled'


const Container = Styled.div`
  height: 100%;
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
`

const App = () => {
  const isAuth = true // TODO
  return (
    <Container>
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
    </Container>
  )
}

export default App
