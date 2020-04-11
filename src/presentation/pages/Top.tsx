import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../../App.css'
import { PageType } from '../common/Types'

export const Top = () => {
  const data: PageType = {
    id: 'xxxxxx',
    age: 20,
  }
  const history = useHistory()

  // useHistoryで画面遷移
  const routerFunc = () => {
    history.push('/about', data)
  }

  return (
    <div className='App'>
      <h1>Topページ</h1>
      
      {/* 普通の画面遷移 */}
      <div style={{margin: '8px'}}>
        <Link to='/about'>about</Link>
      </div>
      
      {/* History画面遷移 */}
      <div style={{margin: '8px'}}>
        <button 
          type='button'
          onClick={routerFunc}>
          about from button
        </button>
      </div>

      {/* パラメータ付き */}
      <div style={{margin: '8px'}}>
        <Link to={{
          pathname: '/about',
          search: '?id=0000',
          hash: '#hash',
          state: data,
        }}>about</Link>
      </div>
   
    </div>
  )
}
