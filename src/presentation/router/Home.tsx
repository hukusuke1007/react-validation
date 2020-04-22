import React from 'react'
import { Home } from '../pages/Home'
import { FirebasePage } from '../pages/FirebasePage'
import { NotFound } from '../pages/NotFound'

const routes = [
  {
    path: '/',
    exact: true,
    children: <Home />,
    component: Home,
  },
  {
    path: '/firebase_page',
    children: <FirebasePage />,
    exact: false,
    component: FirebasePage,
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
