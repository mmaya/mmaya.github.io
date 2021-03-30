import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Card from 'components/ImageCard/ImageCard';



const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    minHeight: "80%",
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(20),
      paddingBottom: theme.spacing(20),
    },
  },
  content: {
    width: '90%',
    margin: "auto",
  },
  group: {
    flexGrow: 1,
  },
  paper: {
    maxWidth: 345,
  },
  control: {
    padding: theme.spacing(2),
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

export default function ProjectsPage({...props}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
      <Typography variant="h3" component="h1" align="center">Projects</Typography>
      <Grid container className={classes.goup} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
          {[0, 1, 2].map((value) => (
              <Grid key={value} item>
                <Card
                  title={`Titulo ${value}`}
                  subtitle={`Subtitulo ${value}`}
                  image={require("views/images/portfolio.png")}
                  content="This impressive paella is a perfect party dish and a fun meal to cook together with your
                  guests. Add 1 cup of frozen peas along with the mussels, if you like."
                  fullContent="Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                  heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                  and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                  saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."
                  buttons={
                    [<IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>,
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>]
                  }/>
              </Grid>
          ))}
          </Grid>
        </Grid>
      </Grid>
      </div>
    </div>
  );
}