import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import { LocalizedSample } from '../component/Sample'

export const Top = () => {
  return (
    <div className='App'>
      <h1>Topページ</h1>
      {/* 多言語化 */}
      <LocalizedSample />
      {/* 画面遷移 */}
      <div style={{margin: '8px'}}>
        <Link to='/home'>home</Link>
      </div>
      <div style={{margin: '8px'}}>
        <Link to='/material'>material</Link>
      </div>
      <div style={{margin: '8px'}}>
        <Link to='/drawer_1'>drawer_1</Link>
      </div>
      <div style={{margin: '8px'}}>
        <Link to='/drawer_2'>drawer_2</Link>
      </div>
    </div>
  )
}
