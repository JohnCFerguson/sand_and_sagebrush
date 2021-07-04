import React from "react";
import { Link, withPrefix } from "gatsby";
import { Card, CardMedia, Grid, Typography } from "@material-ui/core";
import withStyles from "@material-ui/styles/withStyles";
import Header from "./Header";
import Footer from "./Footer";
import "../css/style.styl";
import Logo from "../logos/S+S-Logo-0221_Full_Color_Logo_Vertical.png"

const styles = {
  container: {
    marginTop: 94,
  },
  contentBox: {
    maxWidth: "calc(1136px - 60px)",
    width: "calc(100% - 60px)",
  },
  title: {
    textAlign: "center",
  },
  card: {
    
  },
  cardMedia: {
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  img: {
    width: '100%',
    height: '90%'
  }
};

const Component = ({ children, classes, title }) => {
  return (
    <>
      <Header />
      <Grid
        className={classes.container}
        container
        direction="row"
        justify="center"
      >
        <Grid className={classes.contentBox} item>
          {title ? (
          <Card elevation={0} style={{backgroundColor: 'transparent', justifyContent: 'center'}}>
            <CardMedia
              className={classes.cardMedia}
            >
              <img src={Logo} className={classes.img}/>
            </CardMedia>
          </Card>
          ) : null}
          {children}
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default withStyles(styles)(Component);
