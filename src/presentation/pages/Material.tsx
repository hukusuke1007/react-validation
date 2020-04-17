import React from 'react'
import '../../App.css'
import { BoxSample } from '../component/material/BoxSample'
import { ContainerSample } from '../component/material/ContainerSample'
import { GridSample } from '../component/material/GridSample'
import { ButtonSample } from '../component/material/ButtonSample'
import { GridListSample } from '../component/material/GridListSample'
import { SwitchSample } from '../component/material/SwitchSample'
import { TextSample } from '../component/material/TextSample'
import { CardSample } from '../component/material/CardSample'
import { Link } from 'react-router-dom'

/**
 * API
 * https://material-ui.com/ja/getting-started/usage/
 * 
 * パラメータ
 * https://material-ui.com/system/api/
 */
export const Material = () => {
  return (
    <div>
      <div className='App'>
        <div style={{
          padding: 4,
        }}>
          <h1>Materialページ</h1>
        </div>
        <div style={{margin: '8px'}}>
          <Link to='/drawer_1'>Drawer 1</Link>
        </div>
        <div style={{margin: '8px'}}>
          <Link to='/drawer_2'>Drawer 2</Link>
        </div>
        <CardSample />
        <TextSample />
        <SwitchSample />
        <BoxSample />
        <ContainerSample />
        <GridSample />
        <ButtonSample />
        <GridListSample />
      </div>
    </div>
  )
}
