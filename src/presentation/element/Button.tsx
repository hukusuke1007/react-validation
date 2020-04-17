import React from 'react'
import Styled from '../theme/Styled'
import '../../App.css'

// https://neumorphism.io/#ffffff

const backgroundColor = '#DEE2EB'

/** 
 * Button
 * inset 0 0 15px rgba(217, 217, 217, 0) は transition反映させるために必要
 * */
const Button = Styled.button`
  padding: 8px;
  border-radius: 50px;
  background: ${backgroundColor};

  box-shadow: 
  inset 0 0 15px rgba(217, 217, 217, 0),
  inset 0 0 20px rgba(255, 255, 255, 0),
  7px 7px 15px rgba(55, 84, 170, .15),
  -7px -7px 20px rgba(255, 255, 255, 1),
  inset 0px 0px 4px rgba(255, 255, 255, .2);

  font-size: 20px;

  // buttonの要素無効
  border: none;
  cursor: pointer;
  outline: none;
  appearance: none;

  // カーソルが触れた時
  &:hover {
    box-shadow: 
    inset 0 0 15px rgba(217, 217, 217, 0),
    inset 0 0 20px rgba(255, 255, 255, 0),
    3px 3px 4px rgba(55, 84, 170, .15),
    -1px -1px 4px rgba(255, 255, 255, 1),
    inset 0px 0px 4px rgba(255, 255, 255, .2);
  }

  // 押下時
  &:active {
    box-shadow:
    inset 3px 3px 1px rgba(217, 217, 217, 1),
    inset -1px -1px 1px rgba(255, 255, 255, 1);
  }

  transition: .5s;
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
  background: ${backgroundColor};
  box-shadow: 
  inset 0 0 15px rgba(217, 217, 217, 0),
  inset 0 0 20px rgba(255, 255, 255, 0),
  7px 7px 15px rgba(55, 84, 170, .15),
  -7px -7px 20px rgba(255, 255, 255, 1),
  inset 0px 0px 4px rgba(255, 255, 255, .2);

  font-size: 20px;

  // buttonの要素無効
  border: none;
  cursor: pointer;
  outline: none;
  appearance: none;

  // カーソルが触れた時
  &:hover {
    box-shadow: 
    inset 0 0 15px rgba(217, 217, 217, 0),
    inset 0 0 20px rgba(255, 255, 255, 0),
    3px 3px 4px rgba(55, 84, 170, .15),
    -1px -1px 4px rgba(255, 255, 255, 1),
    inset 0px 0px 4px rgba(255, 255, 255, .2);
  }

  // 押下時
  &:active {
    box-shadow:
    inset 3px 3px 1px rgba(217, 217, 217, 1),
    inset -1px -1px 1px rgba(255, 255, 255, 1);
  }

  transition: .5s;
`
export const SampleCircleButton: React.FC<Prop> = ({ children, style, onClick }, ) => {
  return (
    <CircleButton style={style} onClick={onClick}>
      {children}
    </CircleButton>
  )
}
