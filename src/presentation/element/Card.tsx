import React from 'react'
import Styled from '../theme/Styled'
import '../../App.css'

const lightBgColor = '#DEE2EB'
const lightShadowColor1 = 'rgba(255,255,255, .7)'
const lightShadowColor2 = 'rgba(55, 84, 170, .15)'
const darkShadowColor1 = 'rgba(4, 5, 7, .7)' 
const darkShadowColor2 = 'rgba(4, 5, 7, .3)'
const darkShadowColor3 = 'rgba(76, 78, 90, .3)'

// 凹
const ConcaveDiv= Styled.div`
  padding: 16px;
  border-radius: 16px;
  background: ${props => 
    props.theme.mode === 'light' 
      ? lightBgColor 
      : `
      linear-gradient(150deg, ${darkShadowColor1}, ${darkShadowColor2}, ${darkShadowColor3})
      `
  };
  
  box-shadow: ${props => 
    props.theme.mode === 'light' 
      ? // light
      `
      inset 1px 1px 10px #babecc, inset -1px -1px 1px #ffffff
      `
      : // dark
      `
      inset 7px 7px 10px rgba(0,0,0,1), inset -1px -1px 10px rgba(76,78,90,1)
      ` 
  };
`

// 凸
const ConvexDiv= Styled.div`
  padding: 16px;
  border-radius: 16px;
  background: ${props => 
    props.theme.mode === 'light' 
      ? lightBgColor 
      : `
      linear-gradient(150deg, ${darkShadowColor1}, ${darkShadowColor2}, ${darkShadowColor3})
      `
  };
  
  box-shadow: ${props => 
    props.theme.mode === 'light' 
      ? `-7px -7px 20px ${lightShadowColor1}, 7px 7px 20px ${lightShadowColor2}` 
      : `-7px -7px 20px rgba(76,78,90, .5), 7px 7px 20px #000`
  };
`


const cardType = {
  concave: 'concave', // 凹
  convex: 'convex', // 凸
}
type Prop = {
  style?: React.CSSProperties,
  type?: keyof typeof cardType,
}

export const Card: React.FC<Prop> = ({ children, style, type }, ) => {
  if (type === cardType.concave) {
    return (
      <ConcaveDiv style={style}>
        {children}
      </ConcaveDiv>
    )
  }
  return (
    <ConvexDiv style={style}>
      {children}
    </ConvexDiv>
  )
}
