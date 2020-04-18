import 'reflect-metadata'
import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect, } from 'react-router-dom'
import { NotFound } from './presentation/pages/NotFound'
import { ScrollTop } from './presentation/component/ScrollTop'
import topRoutes from './presentation/router/Top'
import homeRoutes from './presentation/router/Home'
import {
  AppBar,
  Toolbar,
} from '@material-ui/core'
import { 
  shallowEqual,
  useSelector,
} from 'react-redux'
import { DocumentData, QuerySnapshot } from '@1amageek/ballcap'
import Styled from './presentation/theme/Styled'
import { Item } from './domain/model'
import { StoreState } from './domain/redux/StoreState'
import * as modules from './domain/redux/modules'

/**
 * DarkMode
 */
const Container = Styled.div`
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
`

const App = () => {
  const isAuth = true
  const selector = useSelector<StoreState, modules.Item.State>(
    state => state.item, 
    shallowEqual,
  )
  console.log('App', selector.item)
  useEffect(() => {
    Item.collectionReference()
      .limit(1)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshots: QuerySnapshot<DocumentData>) => {
        console.log('Snapshot')
        for(let snap of snapshots.docChanges()) {
          console.log(snap.type)
          const item = Item.fromSnapshot<Item>(snap.doc)
          console.log(item)
        }
      })
  }, [])
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
    </Container>
  )
}

export default App
