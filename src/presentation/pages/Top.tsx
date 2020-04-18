import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../../App.css'
import '../common/style/LinkLabel.css'
import { 
  LocalizedSample, 
  DarkModeSample, 
} from '../component/Sample'
import { EmotionSample } from '../component/EmotionSample'
import container from '../../di_container/tsyringe.config'
import { SampleUseCase } from '../../domain/use_case/SampleUseCase'
import { ReduxSample } from '../component/ReduxSample'
import { MaterialButton } from '../element/MaterialButton'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

export const Top = () => {
  const loadSample = () => {
    const useCase = container.resolve<SampleUseCase>('SampleUseCase')
    const result = useCase.loadSample()
    console.log('result', result)
  }
  loadSample()

  const history = useHistory()
  return (
    <div className='App'>
      <div style={{
        padding: 4,
      }}>
        <h1>Topページ</h1>
      </div>
      {/* Redux */}
      <div style={{
        marginBottom: '10px'
      }}>
        <ReduxSample />
      </div>
      {/* DI */}
      <div>
        <button onClick={loadSample} >
          loadSample
        </button>
      </div>
      {/* Emotion */}
      <EmotionSample />
      {/* DarkMode */}
      <DarkModeSample />
      {/* 多言語化 */}
      <LocalizedSample />
      {/* 画面遷移 */}
      <div style={{margin: '8px'}}>
        <MaterialButton
          startIcon={<CloudUploadIcon />}
          fullWidth={true}
          onClick={(e) => {
            history.push(`/home`)
          }}
        >
          home
        </MaterialButton>
        {/* <Link to='/home' className={'linkLabel'}>home</Link> */}
      </div>
      <div style={{margin: '8px'}}>
        <MaterialButton
          fullWidth={true}
          onClick={(e) => {
            history.push(`/material`)
          }}
        >
          material
        </MaterialButton>
        {/* <Link to='/material'>material</Link> */}
      </div>
      <div style={{margin: '8px'}}>
        <MaterialButton
          fullWidth={true}
          onClick={(e) => {
            history.push(`/drawer_1`)
          }}
        >
          drawer_1
        </MaterialButton>
        {/* <Link to='/drawer_1'>drawer_1</Link> */}
      </div>
      <div style={{margin: '8px'}}>
        <MaterialButton
          fullWidth={true}
          onClick={(e) => {
            history.push(`/drawer_2`)
          }}
        >
          drawer_1
        </MaterialButton>
        {/* <Link to='/drawer_2'>drawer_2</Link> */}
      </div>
    </div>
  )
}
