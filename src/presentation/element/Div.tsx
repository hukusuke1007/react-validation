import React from 'react'
import Styled from '../theme/Styled'
import '../../App.css'

// https://neumorphism.io/#ffffff
const Div = Styled.div`
  padding: 8px;
  border-radius: 50px;
  background: #ffffff;
  box-shadow:  20px 20px 60px #d9d9d9, 
               -20px -20px 60px #ffffff;
`

type Prop = {
  style?: React.CSSProperties,
}

export const SampleDiv: React.FC<Prop> = ({ children, style, }, ) => {
  return (
    <Div style={style}>
      {children}
    </Div>
  )
}
