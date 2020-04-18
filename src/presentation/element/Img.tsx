import React from 'react'
import Styled from '../theme/Styled'
import '../../App.css'

const lightShadowColor1 = 'rgba(55, 84, 170, .1)'
const lightShadowColor2 = 'rgba(55, 84, 170, .15)'
const darkShadowColor1 = 'rgba(0, 0, 0, .7)' 

const ThumbnailImg = Styled.img`
  width: 200px;
  height: auto;
  border-radius: 8px;
  box-shadow: ${props => 
    props.theme.mode === 'light' 
      ? `-3px -2px 4px ${lightShadowColor1}, 3px 2px 4px ${lightShadowColor2}` 
      : `-1px -1px 1px ${darkShadowColor1}, 3px 3px 10px ${darkShadowColor1}`
  };
`

const AvatarImg = Styled.img`
  width: 60px;
  height: 60px;
  vertical-align: middle;
  border-radius: 50%;
  box-shadow: ${props => 
    props.theme.mode === 'light' 
      ? `-3px -2px 4px ${lightShadowColor1}, 3px 2px 4px ${lightShadowColor2}` 
      : `-1px -1px 1px ${darkShadowColor1}, 3px 3px 10px ${darkShadowColor1}`
  };
`

const imgType = {
  thumbnail: 'thumbnail',
  avatar: 'avatar',
}


type Prop = {
  style?: React.CSSProperties,
  type?: keyof typeof imgType,
  src?: string,
  width?: string | number,
  height?: string | number, 
  alt?: string,
  title?: string,
}

export const Img: React.FC<Prop> = ({ ...props }, ) => {
  if (props.type === imgType.avatar) {
    return <AvatarImg 
      {...props}
    />
  } 
  return (
    <ThumbnailImg 
      {...props}
    />
  )
}
