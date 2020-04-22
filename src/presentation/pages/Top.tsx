import React from 'react'
import { useHistory } from 'react-router-dom'
import '../../App.css'
import '../common/style/LinkLabel.css'
import { MaterialButton } from '../element/MaterialButton'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'

export const Top = () => {
  const history = useHistory()
  return (
    <div className='App'>
      <h1>Topページ</h1>
      <MaterialButton
        startIcon={<CloudUploadIcon />}
        fullWidth={true}
        onClick={(e) => {
          history.push(`/home`)
        }}
      >
        home
      </MaterialButton>
    </div>
  )
}
