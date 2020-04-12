import React from 'react'
import '../../App.css'
import { BoxSample } from '../component/material/BoxSample'
import { ContainerSample } from '../component/material/ContainerSample'
import { GridSample } from '../component/material/GridSample'
import { ButtonSample } from '../component/material/ButtonSample'
import { GridListSample } from '../component/material/GridListSample'
import { SwitchSample } from '../component/material/SwitchSample'

/**
 * API
 * https://material-ui.com/ja/getting-started/usage/
 * 
 * パラメータ
 * https://material-ui.com/system/api/
 */
export const Material = () => {
  return (
    <div className='App'>
      <h1>Materialページ</h1>
      <SwitchSample />
      <BoxSample />
      <ContainerSample />
      <GridSample />
      <ButtonSample />
      <GridListSample />
    </div>
  )
}
