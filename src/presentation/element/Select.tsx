import React from 'react'
import Styled from '../theme/Styled'
import '../../App.css'

const lightBgColor = '#DEE2EB'
const darkBgColor = '#040507' // rgba(4, 5, 7)

const StyledSelect = Styled.select`
  width: 100%;
  padding: 8px 16px;
  font-size: 16px;
  
  border-radius: 16px;
  background: ${props => props.theme.mode === 'light' ? lightBgColor : darkBgColor};
  color: ${props => props.theme.mode === 'light' ? `rgba(0, 0, 0, .8)` : `rgba(255, 255, 255, .8)`};

  box-shadow: ${props => 
    props.theme.mode === 'light' 
      ? // light
      `
      inset 2px 2px 5px #babecc, inset -4px -4px 5px #ffffff
      `
      : // dark
      `
      inset 7px 7px 15px rgba(0, 0, 0, 1),
      inset -7px -7px 10px rgba(76, 78, 90, 1),
      0px 0px 4px rgba(76, 78, 90, .2)
      ` 
  };

  border: none;
  outline: none;
  -webkit-appearance: none;

  // フォーカス時
  &:focus {
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
  }


  // 右の矢印
  background-image: ${props => 
    props.theme.mode === 'light' 
      ? // light
      `
      linear-gradient(45deg, transparent 50%, gray 50%),
      linear-gradient(135deg, gray 50%, transparent 50%)
      `
      : // dark
      `
      linear-gradient(45deg, transparent 50%, white 50%),
      linear-gradient(135deg, white 50%, transparent 50%)
      ` 
  };
  background-position:
    calc(100% - 20px) calc(1em),
    calc(100% - 15px) calc(1em);
  background-size:
    5px 5px,
    5px 5px;
  background-repeat: no-repeat;

  transition: .5s;
`

const StyledOption = Styled.option`
`

type SelectProp = {
  style?: React.CSSProperties,
  defaultValue?: string | string[] | number,
  value?: string | string[] | number,
  onClick?: (event: React.MouseEvent<HTMLSelectElement, MouseEvent>) => void,
  onChange?: React.ChangeEventHandler<HTMLSelectElement>,
}

export const Select: React.FC<SelectProp> = ({ children, style, defaultValue, value, onClick, onChange }, ) => {
  return (
    <StyledSelect 
      style={style}
      defaultValue={defaultValue}
      value={value}
      onClick={onClick}
      onChange={onChange}
    >
      {children}
    </StyledSelect>
  )
}

type MenuItemProp = {
  style?: React.CSSProperties,
  value?: string | number,
}

export const MenuItem: React.FC<MenuItemProp> = ({ children, style, value, }, ) => {
  return (
    <StyledOption 
      style={style}
      value={value}
    >
      {children}
    </StyledOption>
  )
}