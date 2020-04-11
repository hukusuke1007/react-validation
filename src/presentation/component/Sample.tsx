import React, { useState } from 'react'
import logo from '../../logo.svg'
import '../../App.css'
import { InputType } from '../common/Types'

export const AppSampleComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export const SampleTextArea = (props: InputType) => {
  const [text, onTextChange] = useState(props.text)
  return (
    <div className="App">
      <div style={{
        margin: '8px',
      }}>
        <input 
          type="text" 
          value={text}
          onChange={(event) => {
            onTextChange(event.target.value)
          }}
        />
      </div>
      <div style={{
        margin: '8px',
      }}>
        <button type='button' onClick={() => {
          onTextChange('')
          props.onClear()
        }}>
          clear
        </button>
      </div>
    </div>
  )
}