import React from 'react'
import Styled from '../theme/Styled'
import '../../App.css'

const StyledDiv = Styled.div`
  background: ${props => props.theme.background};
`

type Prop = {
  style?: React.CSSProperties,
}

export const Container: React.FC<Prop> = ({ children, ...props }, ) => {
  return (
    <StyledDiv {...props}>
      {children}
    </StyledDiv>
  )
}
