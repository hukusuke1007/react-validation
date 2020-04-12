import React from 'react'
import { 
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles'
import { 
  Box,
  Button,
  Icon,
} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import DeleteIcon from '@material-ui/icons/Delete'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'

const useStyles = makeStyles((theme: Theme) => createStyles({
  botton_root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 32,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
  input: {
    display: 'none',
  },
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
}))

export const ButtonSample = () => {
  const classes = useStyles()
  return (
    <div>
      {/* 様々なボタン */}
      <Box component="span" m={1}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => {
            console.log('click')
          }}>
          Hello World
        </Button>
      </Box>
      <Box component="span" m={1}>
        <Button 
          classes={{
            root: classes.botton_root, // class name, e.g. `classes-nesting-root-x`
            label: classes.label, // class name, e.g. `classes-nesting-label-x`
          }}
          onClick={() => {
            console.log('click')
          }}>
          Hello World
        </Button>
      </Box>
      <Box component="div" m={1}>
        <Button>Default</Button>
        <Button color="primary">Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons" color="primary">
          Link
        </Button>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
      </Box>

      {/* カメラ */}
      <div>
        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
        <label htmlFor="icon-button-file">
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
      </div>

      {/* アイコン */}
      <IconButton aria-label="delete" className={classes.margin} size="small">
        <ArrowDownwardIcon fontSize="inherit" />
      </IconButton>
      <IconButton aria-label="delete" className={classes.margin} size="medium">
        <DeleteIcon />
      </IconButton>

      {/* アイコンとテキストセットのボタン */}
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        startIcon={<CloudUploadIcon />}
      >
        Upload
      </Button>
    </div>
  )
}
