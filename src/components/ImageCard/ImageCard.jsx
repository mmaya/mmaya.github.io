import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    maxWidth: 345,
    marginTop: theme.spacing(1),
    minHeight: "calc(100vw * (6/14))",
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(5),
    },
    cursor: 'pointer'
  },
  backdrop: {
    zIndex: theme.zIndex.appBar,
    width: '100%',
    background: 'rgba(0, 0, 0, 0.2)',
    position: 'absolute',
    top: 0,
    textAlign: 'center',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  button: {
    '& > *': {
      marginLeft: theme.spacing(1),
      zIndex: theme.zIndex.drawer + 1,
      marginTop: '56.25%',
    }
  }
}));

export default function ImageCard({...props}) {
  const classes = useStyles();
  const { title, subtitle, content, buttons, image, imageTitle} = props;
  
  //Card button backdrop
  const [expanded, setExpanded] = React.useState(false);
  const ref = React.useRef()
  const [height, setHeight] = React.useState(0)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };  
  React.useEffect(() => {
    setHeight(ref.current.clientHeight)
  },[])

  return (
    <div className={classes.root} 
        onMouseEnter={handleExpandClick}
        onMouseLeave={handleExpandClick}>
      <div ref={ref}>
        <Card>
          <CardHeader
            title={title}
            subheader={subtitle}
            aria-label="card-header"
          />
          <CardMedia
            className={classes.media}
            image={image}
            title={imageTitle}
            aria-label="card-media"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p" align="justify">
              {content}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <Grow in={expanded} mountOnEnter>
        <Paper className={classes.backdrop} elevation={0} style={{height: height}}>
          <Box className={classes.button}>
            {buttons && buttons.map((button) => (
                  button
                ))}
          </Box>
        </Paper>
      </Grow>
    </div>
  );
}