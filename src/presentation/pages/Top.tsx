import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import { 
  LocalizedSample, 
  DarkModeSample, 
} from '../component/Sample'
import { EmotionSample } from '../component/EmotionSample'
import container from '../../inversify.config'
import { SampleUseCase } from '../../domain/use_case/SampleUseCase'

export const Top = () => {
  const loadSample = () => {
    const useCase = container.get<SampleUseCase>('SampleUseCase')
    const result = useCase.loadSample()
    console.log('result', result)
  }
  loadSample()
  return (
    <div className='App'>
      <h1>Topページ</h1>
      {/* Emotion */}
      <EmotionSample />
      {/* DarkMode */}
      <DarkModeSample />
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
