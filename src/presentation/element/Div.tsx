import React from 'react'
import Styled from '../theme/Styled'
import '../../App.css'

const backgroundColor = '#DEE2EB'

// https://neumorphism.io/#ffffff
const Div = Styled.div`
  padding: 8px;
  border-radius: 50px;
  background: ${backgroundColor};
  box-shadow: -3px -2px 4px rgba(255,255,255, .7), 3px 2px 4px rgba(55, 84, 170, .15);
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
