import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../../App.css'

export const Home = () => {
  const location = useLocation()
  const rootPath = location.pathname

  return (
    <div className='App'>
      <div style={{margin: '8px'}}>
        <Link to={`${rootPath}/firebase_page`}>FirebasePage</Link>
      </div>
    </div>
  )
}
