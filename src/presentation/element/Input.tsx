import React from 'react'
import Styled from '../theme/Styled'
import '../../App.css'

const backgroundColor = '#DEE2EB'
// https://neumorphism.io/#ffffff
const Input = Styled.input`
  padding: 8px 16px;
  font-size: 16px;

  border-radius: 32px;
  background: ${backgroundColor};
  box-shadow: inset 2px 2px 5px #babecc, inset -4px -4px 5px #ffffff;
  transition: .5s;

  border: none;
  outline: none;

  ::placeholder {
    color: #848484;
  }

  // フォーカス時
  &:focus {
    box-shadow: inset 1px 1px 1px #babecc, inset -1px -1px 1px #ffffff;
    transition: .5s;
  }
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

export const SampleInput: React.FC<Prop> = ({ children, style, type, value, placeholder, minLength, maxLength, onClick, onChange }, ) => {
  return (
    <Input 
      style={style}
      type={type}
      value={value}
      placeholder={placeholder}
      minLength={minLength}
      maxLength={maxLength}
      onClick={onClick}
      onChange={onChange}
    >
      {children}
    </Input>
  )
}
