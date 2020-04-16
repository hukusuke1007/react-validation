import React from 'react'
import Styled from '../theme/Styled'
import '../../App.css'

// https://neumorphism.io/#ffffff

/** Button */
const Button = Styled.button`
  padding: 8px;
  border-radius: 50px;
  background: #ffffff;
  box-shadow:  20px 20px 60px #d9d9d9, 
               -20px -20px 60px #ffffff;
  font-size: 20px;

  // buttonの要素無効
  border: none;
  cursor: pointer;
  outline: none;
  appearance: none;

  // カーソルが触れた時
  &:hover {
    
  }

  // 押下時
  &:active {
    color: transparent;
    box-shadow: inset 12px 12px 24px #d9d9d9, 
                inset -12px -12px 24px #ffffff;
  }
`
type Prop = {
  style?: React.CSSProperties,
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

export const SampleButton: React.FC<Prop> = ({ children, style, onClick }, ) => {
  return (
    <Button style={style} onClick={onClick}>
      {children}
    </Button>
  )
}


/** CircleButton */
const CircleButton = Styled.button`
  padding: 8px;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  background: #ffffff;
  box-shadow:  20px 20px 60px #d9d9d9, 
               -20px -20px 60px #ffffff;
  font-size: 20px;

  // buttonの要素無効
  border: none;
  cursor: pointer;
  outline: none;
  appearance: none;

  // カーソルが触れた時
  &:hover {
    
  }

  // 押下時
  &:active {
    color: transparent;
    box-shadow: inset 12px 12px 24px #d9d9d9, 
                inset -12px -12px 24px #ffffff;
  }
`
export const SampleCircleButton: React.FC<Prop> = ({ children, style, onClick }, ) => {
  return (
    <CircleButton style={style} onClick={onClick}>
      {children}
    </CircleButton>
  )
}
