import React from 'react'
import { 
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core/styles'
import { 
  Grid,
  Paper,
} from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => createStyles({
  grid_root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(3, 3), // 上下、左右
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#f8f8f8'
  },
}))

export const GridSample = () => {
  const classes = useStyles()
  return (
    <div className={classes.grid_root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>xs=12</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>xs=6</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
        </Grid>
      </div>
  )
}
