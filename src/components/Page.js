import React from "react";
import { Link, withPrefix } from "gatsby";
import { Card, CardMedia, Grid, Typography } from "@material-ui/core";
import withStyles from "@material-ui/styles/withStyles";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Header from "./Header";
import Footer from "./Footer";
import "../css/style.styl";

const styles = theme => ({
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
  cardMedia: {
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  img: {
    width: '100%',
  }
});

const Component = ({ children, classes, title, image }) => {
  console.log(image)
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
              <GatsbyImage image={image} alt="sang + sagebrush logo" />
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
