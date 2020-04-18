import React from 'react'
import Styled from '../theme/Styled'
import '../../App.css'

const lightBgColor = '#DEE2EB'
const darkBgColor = '#040507' // rgba(4, 5, 7)

const StyledTextArea = Styled.textarea`
  width: 100%;
  padding: 8px 16px;
  font-size: 16px;
  resize: none;
  
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
      inset -7px -7px 20px rgba(76, 78, 90, 1),
      0px 0px 4px rgba(76, 78, 90, .2)
      ` 
  };

  border: none;
  outline: none;
  -webkit-appearance: none;

  ::placeholder {
    color: #848484;
  }

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

  transition: .5s;
`

type Prop = {
  style?: React.CSSProperties,
  value?: string | string[] | number,
  placeholder?: string,
  minLength?: number,
  maxLength?: number,
  rows?: number,
  cols?: number,
  onClick?: (event: React.MouseEvent<HTMLTextAreaElement, MouseEvent>) => void,
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>,
}

export const TextArea: React.FC<Prop> = ({ children, style, value, placeholder, minLength, maxLength, rows, cols, onClick, onChange }, ) => {
  return (
    <StyledTextArea 
      style={style}
      value={value}
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      rows={rows ? rows : 3}
      cols={cols ? cols : 30}
      onClick={onClick}
      onChange={onChange}
    >
      {children}
    </StyledTextArea>
  )
}
