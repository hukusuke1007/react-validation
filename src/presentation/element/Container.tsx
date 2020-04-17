import React from 'react'
import Styled from '../theme/Styled'
import '../../App.css'

const lightBgColor = '#DEE2EB'
const darkBgColor = '#040507'

// https://neumorphism.io/#ffffff
const Div = Styled.div`
  padding: 8px;
  background-color: ${props => props.theme.mode === 'light' ? lightBgColor : darkBgColor};
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
