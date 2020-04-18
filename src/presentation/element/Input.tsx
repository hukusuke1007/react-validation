import React from 'react'
import Styled from '../theme/Styled'
import '../../App.css'

const lightBgColor = '#DEE2EB'
const darkBgColor = '#040507' // rgba(4, 5, 7)

const StyledInput = Styled.input`
  width: 100%;
  padding: 8px 16px;
  font-size: 16px;
  
  border-radius: 32px;
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

const inputType = {
  text: 'text',
  password: 'password',
  checkbox: 'checkbox',
  radio: 'radio',
  file: 'file',
  hidden: 'hidden',
  submit: 'submit',
  reset: 'reset',
  button: 'button',
  image: 'image',
  toggle: 'toggle',
};

type Prop = {
  style?: React.CSSProperties,
  type?: keyof typeof inputType,
  value?: string | string[] | number,
  placeholder?: string,
  minLength?: number,
  maxLength?: number,
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
}

export const Input: React.FC<Prop> = ({ children, ...props }, ) => {
  return (
    <StyledInput 
      {...props}
    >
      {children}
    </StyledInput>
  )
}
