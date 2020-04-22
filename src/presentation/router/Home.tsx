import React from 'react'
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { User } from '../pages/User'
import { FirebasePage } from '../pages/FirebasePage'
import { Neumorphism } from '../pages/Neumorphism'
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
    path: '/firebase_page',
    children: <FirebasePage />,
    exact: false,
    component: FirebasePage,
    redirect: true,
  },
  {
    path: '/neumorphism',
    children: <Neumorphism />,
    exact: false,
    component: Neumorphism,
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
