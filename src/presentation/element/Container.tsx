import React from 'react'
import Styled from '../theme/Styled'
import '../../App.css'

const backgroundColor = '#DEE2EB'

// https://neumorphism.io/#ffffff
const Div = Styled.div`
  padding: 8px;
  background-color: ${backgroundColor};
  height: 100%;
`

type Prop = {
  style?: React.CSSProperties,
}

export const SampleContainer: React.FC<Prop> = ({ children, style, }, ) => {
  return (
    <Div style={style}>
      {children}
    </Div>
  )
}
