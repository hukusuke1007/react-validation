import React from 'react'
import clsx from 'clsx'
import { 
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles'
import { 
  Grid,
  TextField,
  FormControl,
  FormHelperText,
  InputLabel,
  InputAdornment,
  Input,
  IconButton,
  MenuItem
} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import AccountCircle from '@material-ui/icons/AccountCircle'

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}))

type State = {
  amount: string
  password: string
  weight: string
  weightRange: string
  showPassword: boolean
}

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
]

export const TextSample = () => {
  const classes = useStyles()
  const [values, setValues] = React.useState<State>({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  })
  const [currency, setCurrency] = React.useState('EUR')

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }
  const handleChangeMenu = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('aaaaaaaaaa', event.target.value)
    setCurrency(event.target.value)
  }
  return (
    <div style={{
      justifyContent: 'center',
    }}>
      {/* TextField */}
      <div>
        <form className={classes.root} noValidate autoComplete='off'>
          <TextField 
            required
            id='standard-basic' 
            label='Standard' 
            defaultValue='Default Value'
            placeholder='placeholder'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              console.log(e.target.value)
            }}
          />
          <TextField id='filled-basic' label='Filled' variant='filled' />
          <TextField id='outlined-basic' label='Outlined' variant='outlined' />
        </form>
      </div>
      {/* Multiline */}
      <div>
        <form className={classes.root} noValidate autoComplete='off'>
          <TextField
            id='filled-multiline-static'
            label='Multiline'
            multiline
            rows={4}
            defaultValue='Default Value'
            variant='filled'
          />
        </form>
      </div>
      {/* Input Adornments */}
      <div>
        <TextField
          label='With normal TextField'
          id='standard-start-adornment'
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            startAdornment: <InputAdornment position='start'>Kg</InputAdornment>,
          }}
        />
        <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
          <Input
            id='standard-adornment-weight'
            value={values.weight}
            onChange={handleChange('weight')}
            endAdornment={<InputAdornment position='end'>Kg</InputAdornment>}
            aria-describedby='standard-weight-helper-text'
            inputProps={{
              'aria-label': 'weight',
            }}
          />
          <FormHelperText id='standard-weight-helper-text'>Weight</FormHelperText>
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)}>
          <InputLabel htmlFor='standard-adornment-password'>Password</InputLabel>
          <Input
            id='standard-adornment-password'
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>

      {/* アイコンとテキストフィールド */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '16px',
      }}>
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="With a grid" />
            </Grid>
          </Grid>
        </div>
      </div>

      {/* 選択ボタン */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '16px',
      }}>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              id="standard-select-currency"
              select
              label="Select"
              value={currency}
              onChange={handleChangeMenu}
              helperText="Please select your currency"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
  
        </form>
      </div>
    </div>
  )
}
