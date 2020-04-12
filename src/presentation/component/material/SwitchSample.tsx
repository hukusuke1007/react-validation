import React from 'react'
// import { 
//   makeStyles,
//   createStyles,
//   Theme,
// } from '@material-ui/core/styles'
import { 
  Switch,
  FormGroup,
  FormControlLabel,
} from '@material-ui/core'

// const useStyles = makeStyles((theme: Theme) => createStyles({
//   botton_root: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     borderRadius: 32,
//     border: 0,
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//   },
//   label: {
//     textTransform: 'capitalize',
//   },
//   input: {
//     display: 'none',
//   },
//   margin: {
//     margin: theme.spacing(1),
//   },
//   button: {
//     margin: theme.spacing(1),
//   },
// }))

export const SwitchSample = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  })
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked })
  }
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
    }}>
      {/* スイッチボタン */}
      <FormGroup row>
        <FormControlLabel
          control={
            <Switch 
              size="medium"
              checked={state.checkedA} 
              onChange={handleChange} 
              name="checkedA" 
            />}
          label="Secondary"
        />
        <FormControlLabel
          control={
            <Switch
              size="small"
              checked={state.checkedB}
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label="Primary"
        />
        <FormControlLabel control={<Switch />} label="Uncontrolled" />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
        <FormControlLabel disabled control={<Switch checked />} label="Disabled" />
      </FormGroup>     
    </div>
  )
}
