import React from 'react'
import Styled from '../theme/Styled'

/** 
 * Button
 * inset 0 0 15px rgba(217, 217, 217, 0) は transition反映させるために必要
 * */

 /**
 * 
 * 040507	rgba(4, 5, 7)
 * 4C4E5A rgba(76, 78, 90)
 */
const lightBgColor = '#DEE2EB'
const darkShadowColor1 = 'rgba(4, 5, 7, .5)'
const darkShadowColor2 = 'rgba(76, 78, 90, .7)'

const StyledButton = Styled.button`
  padding: 8px;

  // buttonの要素無効
  border: none;
  cursor: pointer;
  outline: none;
  appearance: none;

  border-radius: 50px;
  background: ${props => 
    props.theme.mode === 'light' 
      ? lightBgColor 
      : `linear-gradient(135deg, ${darkShadowColor1}, ${darkShadowColor2})`
  };

  box-shadow: ${props => 
    props.theme.mode === 'light' 
      ? // light
      `
      inset 0 0 15px rgba(217, 217, 217, 0),
      inset 0 0 20px rgba(255, 255, 255, 0),
      7px 7px 15px rgba(55, 84, 170, .15),
      -7px -7px 20px rgba(255, 255, 255, 1),
      inset 0px 0px 4px rgba(255, 255, 255, .2)
      `
      : // dark
      `
      inset 0 0 15px rgba(0, 0, 0, 0),
      inset 0 0 20px rgba(76, 78, 90, 0),
      7px 7px 15px rgba(0, 0, 0, .7),
      -7px -7px 20px rgba(76, 78, 90, 1),
      inset 0px 0px 4px rgba(76, 78, 90, .2)
      ` 
  };
  color: ${props => props.theme.mode === 'light' ? `rgba(0, 0, 0, .8)` : `rgba(255, 255, 255, .8)`};

  font-size: 20px;

  // カーソルが触れた時
  &:hover {
    box-shadow: ${props => 
      props.theme.mode === 'light' 
        ? // light
        `
        inset 0 0 15px rgba(217, 217, 217, 0),
        inset 0 0 20px rgba(255, 255, 255, 0),
        3px 3px 4px rgba(55, 84, 170, .15),
        -1px -1px 4px rgba(255, 255, 255, 1),
        inset 0px 0px 4px rgba(255, 255, 255, .2)
        `
        : // dark
        `
        inset 0 0 15px rgba(0, 0, 0, 0),
        inset 0 0 20px rgba(76, 78, 90, 0),
        3px 3px 4px rgba(0, 0, 0, .15),
        -1px -1px 4px rgba(76, 78, 90, 1),
        inset 0px 0px 4px rgba(76, 78, 90, .2)
        ` 
    };
  }

  // 押下時
  &:active {
    box-shadow: ${props => 
      props.theme.mode === 'light' 
        ? // light
        `
        inset 7px 7px 15px rgba(55, 84, 170, .2),
        inset -7px -7px 20px rgba(255, 255, 255, 1),
        0px 0px 4px rgba(255, 255, 255, .2)
        `
        : // dark
        `
        inset 7px 7px 15px rgba(0, 0, 0, 1),
        inset -7px -7px 20px rgba(76, 78, 90, 1),
        0px 0px 4px rgba(76, 78, 90, .2)
        ` 
    };
  }

  transition: .5s;
`
type Prop = {
  style?: React.CSSProperties,
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

export const Button: React.FC<Prop> = ({ children, ...props }, ) => {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  )
}

export const CircleButton: React.FC<Prop> = ({ children, ...props }, ) => {
  return (
    <StyledButton 
      style={{
        width: 60,
        height: 60,
      }}
      {...props}
    >
      {children}
    </StyledButton>
  )
}