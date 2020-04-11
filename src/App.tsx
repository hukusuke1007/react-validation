import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Top } from './presentation/pages/Top'
import { About } from './presentation/pages/About'
import { Material } from './presentation/pages/Material'
import { User } from './presentation/pages/User'
import { NotFound } from './presentation/pages/NotFound'
import { ScrollTop } from './presentation/component/ScrollTop'

const App = () => {
  const isAuth = false
  return (
    <BrowserRouter>
      <ScrollTop />
      <Switch>
        {/* リダイレクト */}
        <Route path='/' exact>
          {isAuth ? <Redirect to='/users/0001'/> : <Top />}
        </Route>
        <Route path='/about' children={<About />} />
        <Route path='/material' children={<Material />} />
        <Route path="/users/:id" children={<User />} />
        <Route path='*' children={<NotFound />} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
