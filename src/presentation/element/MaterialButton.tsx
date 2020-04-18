import React from 'react'
import Button from '@material-ui/core/Button'
import { useTheme } from '../theme/ThemeContext'
import { getTheme } from '../theme/Theme'

type Prop = {
  style?: React.CSSProperties,
  disableElevation?: boolean;
  disableFocusRipple?: boolean;
  endIcon?: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
  size?: 'small' | 'medium' | 'large';
  startIcon?: React.ReactNode;
  variant?: 'text' | 'outlined' | 'contained';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

export const MaterialButton: React.FC<Prop> = ({ children, ...props }, ) => {
  const { colorMode } = useTheme()
  const { linkFontColor } = getTheme(colorMode)
  return (
    <Button 
      {...props}
      style={{
        ...props.style,
        color: linkFontColor,
      }}
    >
      {children}
    </Button>
  )
}
