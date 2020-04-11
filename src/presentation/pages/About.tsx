import React, {
  useEffect, useRef, useState,

} from 'react'
import {
   useLocation
} from 'react-router-dom'
import '../../App.css'
import { PageType } from '../common/Types'
import { SampleTextArea } from '../component/Sample'
import { InputType } from '../common/Types'

export const About = () => {
  /**
   * ライフサイクル
   * https://www.hypertextcandy.com/react-for-vuejs-developers#%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B5%E3%82%A4%E3%82%AF%E3%83%AB
   */
  // created
  // ...ここがcreated

  // mounted
  // 第二引数：空配列
  // 第一引数：初回のレンダリング時のみ呼ばれる
  // → つまり mounted と同等
  useEffect(() => {
    console.log('mounted')
  }, [])

  // updated
  const mounted = useRef(false)
  useEffect(() => {
    console.log('updated', mounted.current)
    mounted.current = !mounted.current

    // destroyed
    return () => {
      console.log('destroyed')
    }
  })

  // 遷移元から渡されたデータを取得
  const location = useLocation<PageType>()
  if (location.state !== undefined) {
    console.log(location.state)
  }

  // コンポーネントへデータ渡し
  const inputProps: InputType = {
    text: 'hello',
    onClear: () => {
      console.log('onClear', inputProps.text)
    }
  }

  const [text, onTextChange] = useState('')
  return (
    <div className='App'>
      <h1>Aboutページ</h1>
      <SampleTextArea {...inputProps}/>
      <input 
          type="text" 
          value={text}
          onChange={(event) => {
            onTextChange(event.target.value)
          }}
        />
    </div>
  )
}
