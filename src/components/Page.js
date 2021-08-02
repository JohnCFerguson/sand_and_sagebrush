import React from "react";
import { Card, CardMedia, Grid, } from "@material-ui/core";
import withStyles from "@material-ui/styles/withStyles";
import { GatsbyImage, } from "gatsby-plugin-image";
import Header from "./Header";
import Footer from "./Footer";
import "../css/style.styl";

const styles = ({
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
    backgroundColor: "transparent",
    justifyContent: "center"
  },
  img: {
    width: "100%",
  }
});

const Component = ({ children, classes, title, image }) => {
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
          <Card elevation={0} style={{backgroundColor: "transparent", justifyContent: "center", margin: "15px"}}>
            <CardMedia
              className={classes.cardMedia}
            >
              <GatsbyImage alt="sand + sagebrush logo" image={image} />
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
