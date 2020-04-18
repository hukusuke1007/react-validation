import React from 'react'
import Styled from '../theme/Styled'
import '../../App.css'

const lightBgColor = '#DEE2EB'
const darkShadowColor1 = 'rgba(4, 5, 7, .5)'
const darkShadowColor2 = 'rgba(76, 78, 90, .7)'

/** custom */
const enableColor1 = '#443DD0' // rgba(68, 61, 208)
const enableColor2 = '#9476B0' // rgba(148, 118, 176)

const defaultSize = '60px'

const StyledDiv = Styled.div`
  position: relative;
  margin: auto;
  display: flex;
  width: ${defaultSize};
  height: ${defaultSize};
`

const StyledInput = Styled.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
  :checked {
    +label {
      background: linear-gradient(135deg, ${enableColor1}, ${enableColor2});
      box-shadow: ${props => 
        props.theme.mode === 'light' 
          ? // light
          `
          1px 1px 1px #babecc, -1px -1px 1px #fff
          `
          : // dark
          `
          -1px -1px 1px ${darkShadowColor1}, 10px 10px 20px #000
          ` 
      };
      color: #fff;
    }
  }

  // カーソルが触れた時
  &:hover {
    +label {
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
  }

  // 押下時
  &:active {
    +label {
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
  }
`

const StyledLabel = Styled.label`
  display: flex;
  width: ${defaultSize};
  height: ${defaultSize};
  box-sizing: border-box;
  padding: 12px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  text-align: center;
  
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

  transition: .5s;
`

type Prop = {
  style?: React.CSSProperties,
  size?: number,
  defaultChecked?: boolean,
  checked?: boolean,
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void,
}

export const CheckButton: React.FC<Prop> = ({ children, style, size, defaultChecked, checked, onClick }, ) => {
  return (
    <StyledDiv style={{
      ...style,
      width: size,
      height: size,
    }}>
      <StyledInput 
        type='checkbox' 
        defaultChecked={defaultChecked}
        checked={checked} 
        onClick={onClick}
      />
      <StyledLabel
        style={{
          width: size,
          height: size,
        }}
      >
        {children}
      </StyledLabel>
    </StyledDiv>
  )
}
