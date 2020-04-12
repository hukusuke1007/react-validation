import React from 'react'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { User } from '../pages/User'
import { NotFound } from '../pages/NotFound'

const routes = [
  {
    path: '/',
    exact: true,
    children: <Home />,
    component: Home,
  },
  {
    path: '/about',
    children: <About />,
    exact: false,
    component: About,
  },
  {
    path: '/users/0001',
    children: <User />,
    exact: false,
    component: User,
    redirect: true,
  },
  {
    path: '*',
    children: <NotFound />,
    exact: false,
    component: NotFound,
  }
]

export default routes
