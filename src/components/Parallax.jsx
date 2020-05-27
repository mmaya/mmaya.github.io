import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

const parallaxStyle = theme => ({
    children:{
      margin: "-10vh 0 0 0",
      width: "100%",
      [theme.breakpoints.up('md')]: {
         margin: "-30vh 0 0 0",
      },
    },
    parallax: {
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

export class Parallax extends React.Component {
  
  render() {
    const {
      children,
      image,
      classes,
    } = this.props;
    

    return (
      
      <div
        className={classes.parallax}
        style={{
          backgroundImage: "url(" + image + ")",
        }}
        ref="parallax"
      >
        <div className={classes.children}>
          {children}
        </div>
      </div>
      
    );
  }
}

export default withStyles(parallaxStyle)(Parallax);