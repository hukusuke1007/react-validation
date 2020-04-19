import React from 'react'
import Styled from '../theme/Styled'
import '../../App.css'

const lightShadowColor1 = 'rgba(55, 84, 170, .1)'
const lightShadowColor2 = 'rgba(55, 84, 170, .15)'
const darkShadowColor1 = 'rgba(0, 0, 0, .7)' 

/**
 * Img 
 */
const ThumbnailImg = Styled.img`
  border-radius: 8px;
  box-shadow: ${props => 
    props.theme.mode === 'light' 
      ? `-3px -2px 4px ${lightShadowColor1}, 3px 2px 4px ${lightShadowColor2}` 
      : `-1px -1px 1px ${darkShadowColor1}, 3px 3px 10px ${darkShadowColor1}`
  };
`

const AvatarImg = Styled.img`
  vertical-align: middle;
  border-radius: 50%;
  box-shadow: ${props => 
    props.theme.mode === 'light' 
      ? `-3px -2px 4px ${lightShadowColor1}, 3px 2px 4px ${lightShadowColor2}` 
      : `-1px -1px 1px ${darkShadowColor1}, 3px 3px 10px ${darkShadowColor1}`
  };
`

type Prop = {
  style?: React.CSSProperties,
  src?: string,
  width?: string | number,
  height?: string | number, 
  alt?: string,
  title?: string,
}

const imgType = {
  thumbnail: 'thumbnail',
  avatar: 'avatar',
}

type ImgProp = {
  type?: keyof typeof imgType,
  img?: Prop
}


export const Img: React.FC<ImgProp> = (props, ) => {
  return (
    <>
      {props.type === imgType.avatar 
        ? <AvatarImg {...props.img} style={{
            width: 60,
            height: 60,
          }} />
        : <ThumbnailImg {...props.img} style={{
            width: 200,
            height: '100%',
          }}/>
      }
    </>
  )
}

/**
 * Img for file 
 */
const StyledDiv= Styled.div`
  margin: auto;
  display: flex;
  box-shadow: ${props => 
    props.theme.mode === 'light' 
      ? `-3px -2px 4px ${lightShadowColor1}, 3px 2px 4px ${lightShadowColor2}` 
      : `-1px -1px 1px ${darkShadowColor1}, 3px 3px 10px ${darkShadowColor1}`
  };

  &:hover {
    box-shadow: ${props => 
      props.theme.mode === 'light' 
        ? // light
        `
        inset 0 0 15px rgba(217, 217, 217, 0),
        inset 0 0 20px rgba(255, 255, 255, 0),
        3px 3px 4px rgba(55, 84, 170, .15),
        -1px -1px 4px rgba(255, 255, 255, 1),
        inset 0px 0px 4px rgba(255, 255, 255, .2)
        `
        : // dark
        `
        inset 0 0 15px rgba(0, 0, 0, 0),
        inset 0 0 20px rgba(76, 78, 90, 0),
        3px 3px 4px rgba(0, 0, 0, .15),
        -1px -1px 4px rgba(76, 78, 90, 1),
        inset 0px 0px 4px rgba(76, 78, 90, .2)
        ` 
    };
      transition: .5s;
  }
`

const StyledLabel = Styled.label`
  display: flex;
  width: 100%;
  height: 100%;
  cursor: pointer;
`

const StyledI = Styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`

const StyledInput = Styled.input`
  display: none;
`

type ChangeFunction = (file: File, binary: string | ArrayBuffer | null) => void
type FileProp = {
  type?: keyof typeof imgType,
  img?: Prop,
  emptyIconSize?: number,
  emptyIcon?: React.ReactNode;
  onChange?: ChangeFunction,
}

const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>, onChange?: ChangeFunction) => {
  console.log('onChangeInput', event.target.files)
  if (event.target.files && event.target.files.length > 0 && onChange) {
    const file = event.target.files[0]
    const fileReader = new FileReader()
    fileReader.onload = () => {
      onChange(file, fileReader.result)
      
    }
    fileReader.readAsDataURL(file)
  }
}

export const ImgFile: React.FC<FileProp> = (props,) => {
  // Empty icon
  const emptyIconSize = props.emptyIconSize ? props.emptyIconSize : props.type === imgType.avatar ? 32 : 80
  const EmptyIcon =  props.emptyIcon 
    ? props.emptyIcon 
    : <StyledI className='material-icons' style={{ fontSize: emptyIconSize }}>add_photo_alternate</StyledI>

  // Avatar
  const avatarSize = 60

  // Thumbnail
  const thumbnailWidth = 200
  const thumbnailHeight = props.img?.width && typeof props.img.width === 'number' 
    ? props.img?.width * (3/4) 
    : thumbnailWidth * (3/4)

  const Image = props.type === imgType.avatar
    ? <AvatarImg  {...props.img} style={{
      width: props.img?.width ? props.img.width : avatarSize,
      height: props.img?.height ? props.img.height : avatarSize,
    }}/>
    : <ThumbnailImg  {...props.img} style={{
      width: props.img?.width ? props.img.width : thumbnailWidth,
      height: props.img?.height ? props.img.height : '100%',
    }}/>
  return (
    <StyledDiv style={{
      width: props.img?.width ? props.img.width : props.type === imgType.avatar ? avatarSize : thumbnailWidth,
      height: props.img?.height ? props.img.height : props.type === imgType.avatar ? avatarSize : thumbnailHeight,
      borderRadius: props.type === imgType.avatar ? '50%': 8,
    }}>
      <StyledLabel>
         {props.img?.src ? <>{Image}</> : <>{EmptyIcon}</> }
        <StyledInput type='file' onChange={(event) => onChangeInput(event, props.onChange)} />
      </StyledLabel>
    </StyledDiv>
  )
}
