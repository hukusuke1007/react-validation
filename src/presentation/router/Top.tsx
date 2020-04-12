import React from 'react'
import { Top } from '../pages/Top'
import { Material } from '../pages/Material'
import { DrawerPage1 } from '../pages/DrawerPage1'
import { DrawerPage2 } from '../pages/DrawerPage2'

const routes = [
  {
    path: '/',
    exact: true,
    children: <Top />,
    component: Top,
  },
  {
    path: '/material',
    exact: false,
    children: <Material />,
    component: Material,
  },
  {
    path: '/drawer_1',
    exact: false,
    children: <DrawerPage1 />,
    component: DrawerPage1,
  },
  {
    path: '/drawer_2',
    exact: false,
    children: <DrawerPage2 />,
    component: DrawerPage2,
  }
]

export default routes
