import React from 'react'
import Styled from '../theme/Styled'
import '../../App.css'

const backgroundColor = '#DEE2EB'

// https://neumorphism.io/#ffffff
const Hr = Styled.hr`
  height: 2px;

  border: none;
  outline: none;
  -webkit-appearance: none;

  border-radius: 50px;
  background-color: ${backgroundColor};
  box-shadow: inset 1px 1px 1px #babecc, inset -1px -1px 1px #ffffff;
`

type Prop = {
  style?: React.CSSProperties,
}

export const SampleDivider: React.FC<Prop> = ({ children, style, }, ) => {
  return (
    <Hr style={style}>
      {children}
    </Hr>
  )
}
