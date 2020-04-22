import React from 'react'
import Styled from '../theme/Styled'
import '../../App.css'

const Button = Styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`
const Div = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hotpink;
  width: 100px;
  height: 100px;
`

export const EmotionSample: React.FC = () => {
  return (
    <div style={{
      display: 'inline',
    }}>
      <Button>This my button component.</Button>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '8px'
      }}>
        <Div>aaaa</Div>
      </div>
    </div>
  )
}
