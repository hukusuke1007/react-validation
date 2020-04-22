import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import '../../App.css'
import { PageType } from '../common/type/Types'

export const Home = () => {
  const data: PageType = {
    id: 'xxxxxx',
    age: 20,
  }
  const history = useHistory()
  const location = useLocation()
  console.log('location', location)
  const rootPath = location.pathname

  // useHistoryで画面遷移
  const routerFunc = () => {
    history.push(`${rootPath}/about`, data)
  }

  return (
    <div className='App'>
      <h1>Homeページ</h1>
      
      <div style={{margin: '8px'}}>
        <Link to={`${rootPath}/neumorphism`}>Neumorphism</Link>
      </div>

      <div style={{margin: '8px'}}>
        <Link to={`${rootPath}/firebase_page`}>FirebasePage</Link>
      </div>

      <div style={{margin: '8px'}}>
        <Link to={`${rootPath}/about`}>About</Link>
      </div>
      
      <div style={{margin: '8px'}}>
        <Link to={`${rootPath}/users/0001`}>User</Link>
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
          pathname: `${rootPath}/about`,
          search: '?id=0000',
          hash: '#hash',
          state: data,
        }}>about</Link>
      </div>
   
    </div>
  )
}
