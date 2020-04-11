import React, { useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import '../../App.css'

export const User = () => {
  // urlのパラメータ取得
  const { id } = useParams()

  // パラメータの変更検知
  useEffect(() => {
    console.log(`URL param changed: ${id}`)
  }, [id])

  // 現在のルート情報を取得
  const location = useLocation()
  console.log('location', location)
  return (
    <div className='App'>
      <h1>Userページ {id}</h1>
    </div>
  )
}
