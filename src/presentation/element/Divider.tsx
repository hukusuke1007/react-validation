import React from 'react'
import Styled from '../theme/Styled'
import '../../App.css'

const lightBgColor = '#DEE2EB'
const darkBgColor = '#040507' // rgba(4, 5, 7)


// https://neumorphism.io/#ffffff
const StyledHr = Styled.hr`
  height: 2px;
  
  border: none;
  outline: none;
  -webkit-appearance: none;

  border-radius: 50px;
  background: ${props => props.theme.mode === 'light' ? lightBgColor : darkBgColor};
  box-shadow: ${props => 
    props.theme.mode === 'light' 
      ? // light
      `
      inset 1px 1px 1px #babecc, inset -1px -1px 1px #ffffff
      `
      : // dark
      `
      inset 1px 1px 1px rgba(0, 0, 0, 1), inset -1px -1px 1px rgba(76, 78, 90, 1)
      ` 
  };
`

type Prop = {
  style?: React.CSSProperties,
}

export const Divider: React.FC<Prop> = ({ children, style, }, ) => {
  return (
    <StyledHr style={style}>
      {children}
    </StyledHr>
  )
}
