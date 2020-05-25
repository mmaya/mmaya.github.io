import React, { useState, useEffect, useCallback, useMemo } from "react";
//@material-ui
import makeStyles from "@material-ui/core/styles/makeStyles";
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import MuiAlert from '@material-ui/lab/Alert';
import Backdrop from '@material-ui/core/Backdrop';
import Button from '@material-ui/core/Button';


function HomePage() {
     
    const useStyles = makeStyles(theme => ({
      root: {
         height: "100%",
      },
      container:{
        margin: theme.spacing(2)
      },
      mensagem: {
        margin: theme.spacing(10),
      },
      backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
      },
    }));
  
  
    return (
      <div>HomePage</div>
    );
  }
  
  export default HomePage;