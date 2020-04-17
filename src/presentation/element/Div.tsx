import React from 'react'
import Styled from '../theme/Styled'
import '../../App.css'
/**
 * 
 * 040507	rgba(4, 5, 7)
 * 4C4E5A rgba(76, 78, 90)
 */
const lightBgColor = '#DEE2EB'
const darkBgColor1 = 'rgba(4, 5, 7)'
const blackColor = '#000'
const lightShadowColor1 = 'rgba(255,255,255, .7)'
const lightShadowColor2 = 'rgba(55, 84, 170, .15)'
const darkShadowColor1 = 'rgba(76, 78, 90, .5)' 
const darkShadowColor2 = 'rgba(76, 78, 90, .7)'

const Div = Styled.div`
  padding: 8px;
  border-radius: 50px;
  background: ${props => 
    props.theme.mode === 'light' 
      ? lightBgColor 
      : `linear-gradient(180deg, ${darkShadowColor2}, rgba(4, 5, 7, .5), ${darkBgColor1})`
  };
  
  box-shadow: ${props => 
    props.theme.mode === 'light' 
      ? `-3px -2px 4px ${lightShadowColor1}, 3px 2px 4px ${lightShadowColor2}` 
      : `-1px -1px 1px ${darkShadowColor1}, 10px 10px 20px ${blackColor}`
  };
`

type Prop = {
  style?: React.CSSProperties,
}

export const SampleDiv: React.FC<Prop> = ({ children, style, }, ) => {
  return (
    <Div style={style}>
      {children}
    </Div>
  )
}
