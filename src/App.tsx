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
import { DocumentData, QuerySnapshot } from '@1amageek/ballcap'
import Styled from './presentation/theme/Styled'
import { Item } from './domain/model'
// import { useSelector } from 'react-redux'
// import { StoreState } from './presentation/redux/StoreState'
// import { State } from './presentation/redux/modules/Counter'

/**
 * DarkMode
 */
const Container = Styled.div`
  height: 100%;
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
`

const App = () => {
  const isAuth = true
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
  // const selector = useSelector<StoreState, State>(state => state.counter)
  // console.log('App', selector.count)
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
