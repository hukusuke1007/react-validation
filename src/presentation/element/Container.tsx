import React from 'react'
import Styled from '../theme/Styled'
import '../../App.css'

const Div = Styled.div`
  background: ${props => props.theme.background};
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
