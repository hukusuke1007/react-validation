import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import {
  GridList,
  ListSubheader,
  GridListTile,
  GridListTileBar,
  IconButton,
} from '@material-ui/core'
import InfoIcon from '@material-ui/icons/Info'
import logo from '../../../logo.svg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
      justifyContent: 'center',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);

type TileProps = {
  id: string,
  title: string,
  img: string,
  author: string,
}

const GridImageTile = (props: TileProps) => {
  const { id, title, img, author } = props
  console.log('id', id)
  const classes = useStyles()
  return (
    <GridListTile key={id}>
      <img src={img} alt={title} />
      <GridListTileBar
        title={title}
        subtitle={<span>by: {author}</span>}
        actionIcon={
          <IconButton aria-label={`info about ${title}`} className={classes.icon}>
            <InfoIcon />
          </IconButton>
        }
      />
    </GridListTile>
  )
}

export const GridListSample = () => {
  const classes = useStyles()
  const tileData = [
    { id: '0', title: 'titleA', img: logo, author: 'shoheiA' },
    { id: '1', title: 'titleB', img: logo, author: 'shoheiB' },
    { id: '2', title: 'titleC', img: logo, author: 'shoheiC' },
    { id: '3', title: 'titleD', img: logo, author: 'shoheiD' },
  ]
  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridImageTile key={tile.id} {...tile} />
        ))}
      </GridList>
    </div>
  )
}