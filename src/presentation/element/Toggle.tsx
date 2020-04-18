import React from 'react'
import Styled from '../theme/Styled'
import '../../App.css'

const black100 = 'rgba(76, 78, 90, 1)'
const darkShadowColor1 = 'rgba(4, 5, 7, .5)'

/** custom */
const enableColor1 = '#443DD0' // rgba(68, 61, 208)
const enableColor2 = '#9476B0' // rgba(148, 118, 176)

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
      &:after {
        left: 40px;
      }
    }
  }
`

const StyledLabel = Styled.label`
  position: relative;
  display: inline-block;
  width: 75px;
  height: 42px;
  border-radius: 46px;
  box-sizing: border-box;

  box-shadow: ${props => 
    props.theme.mode === 'light' 
      ? // light
      `
      inset 2px 2px 5px #babecc, inset -4px -4px 5px #ffffff
      `
      : // dark
      `
      inset 7px 7px 15px rgba(0, 0, 0, 1),
      inset -7px -7px 20px ${black100},
      0px 0px 4px rgba(76, 78, 90, .2)
      ` 
  };

  transition: .4s;
  &:after {
    content: '';
    position: absolute;
    width: 42px;
    height: 42px;
    border-radius: 100%;
    left: 0;
    top: 0;
    z-index: 2;
    background: ${props => 
      props.theme.mode === 'light' 
        ? `linear-gradient(135deg, #c8cbd4, #eef2fb)` 
        : `linear-gradient(135deg, rgba(4, 5, 7), ${black100})`
    };
    box-shadow: ${props => 
      props.theme.mode === 'light' 
        ? // light
        `
        3px 3px 6px #bdc0c8,
        inset 0px 0px 6px #ffffff
        `
        : // dark
        `
        7px 7px 15px #000,
        inset 0px 0px 4px ${black100}
        ` 
    };
    transition: 0.4s;
  }
`

type Prop = {
  isCheck?: boolean,
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void,
}

export const Toggle: React.FC<Prop> = ({ isCheck, onClick }, ) => {
  return (
    <div style={{
      position: 'relative',
      width: '75px',
      height: '42px',
      margin: 'auto',
    }}>
      <StyledInput type='checkbox' checked={isCheck} onClick={onClick}/>
      <StyledLabel />
      <span></span>
    </div> 
  )
}
