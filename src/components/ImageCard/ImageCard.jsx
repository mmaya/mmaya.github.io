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
    position: 'block',
    paddingTop: theme.spacing(1),
    maxHeight: "calc(100vw * (6/14))",
    maxWidth: 345,
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(5),
    },
    cursor: 'pointer'
  },
  backdrop: {
    position: 'relative',
    zIndex: theme.zIndex.drawer + 1,
    width: '100%',
    background: 'rgba(0, 0, 0, 0.2)',
    marginTop: '-119%',
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
  },
  expand: {
    maxWidth: 345,
  },
  expandOpen: {
    backgroundColor: '#000000',
    opacity: 0.5,
    transform: 'scaleY(1)',
    overflow: 'hidden',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.complex,
    }),
  }
}));



export default function ImageCard({...props}) {
  const classes = useStyles();
  const { title, subtitle, content, buttons, image, imageTitle} = props;
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
          />
          <CardMedia
            className={classes.media}
            image={image}
            title={imageTitle}
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
            {buttons.map((button) => (
                  button
                ))}
          </Box>
        </Paper>
      </Grow>
    </div>
  );
}