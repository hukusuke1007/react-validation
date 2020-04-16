import React from 'react'
import '../../App.css'
import { SampleButton } from '../element/Button'

export const Neumorphism = () => {
  return (
    <div className='App'>
      <h1>Neumorphismページ</h1>
      {/* Neumorphism */}
      <div style={{
        padding: 16,
      }}>
        <SampleButton 
          style={{
            width: 120
          }}
          onClick={(e) => console.log(e)} 
        >
          Button
        </SampleButton>
      </div>
    </div>
  )
}
