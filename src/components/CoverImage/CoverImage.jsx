import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

const useStyles = theme => ({
    children:{
      margin: "-10vh 0 0 0",
      width: "100%",
      [theme.breakpoints.up('md')]: {
         margin: "-30vh 0 0 0",
      },
    },
    image: {
      height: "100vh",
      overflow: "hidden",
      position: "relative",
      backgroundPosition: "center center",
      backgroundSize: "cover",
      margin: "0 0 0 0",
      padding: "0",
      border: "0",
      display: "flex",
      alignItems: "center",
    }
  });

export class CoverImage extends React.Component {
  
  render() {
    const {
      children,
      image,
      classes,
    } = this.props;
    

    return (
      
      <div
        className={classes.image}
        style={{
          backgroundImage: "url(" + image + ")",
        }}
        id="image"
      >
        <div className={classes.children} id="children">
          {children}
        </div>
      </div>
      
    );
  }
}

export default withStyles(useStyles)(CoverImage);