import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Fade from '@material-ui/core/Fade';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(5),
    minHeight: "calc(100vw * (6/14))",
  },
  content: {
    width: '70%',
    margin: "auto",
  }
}));

export default function RecipeReviewCard({...props}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
      <Typography variant="h3" component="h1" align="center">Projects</Typography>
      </div>
    </div>
  );
}