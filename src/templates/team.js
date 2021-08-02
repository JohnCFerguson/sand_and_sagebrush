import withRoot from "../utils/withRoot";
import React from "react";
import { graphql } from "gatsby";
import SEO from "../components/SEO";
import Page from "../components/Page";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withPrefix } from "gatsby";
import withStyles from "@material-ui/styles/withStyles";
import "../css/typography.css";

const styles = theme => ({
  paper: {
    padding: "25px",
    margin: "42px"
  },
  image: {
    width: "100%",
  },
  pageFont: {
    fontFamily: "StayClassyDuoSerif",
    textAlign: "center",
    color: theme.palette.secondary.dark,
  }
});

const Detail = ({ classes, data }) => {
  const {
    title,
    image: { publicURL },
    jobtitle,
  } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  return (
    <Page>
      <SEO title={title} />
      <Paper className={classes.paper}>
        <Grid
          alignItems="flex-start"
          container
          direction="row"
          justify="center"
          spacing={8}
        >
          <Grid item md={4} xs={12}>
            <img alt="" className={classes.image} src={withPrefix(publicURL)} />
          </Grid>
          <Grid item md={8} xs={12}>
            <Typography className={classes.pageFont} component="h2" gutterBottom variant="h2">
              {title}
            </Typography>
            <Typography className={classes.pageFont} component="h5" gutterBottom variant="h5">
              {jobtitle}
            </Typography>
            <Typography className={classes.pageFont} dangerouslySetInnerHTML={{ __html: html }} />
          </Grid>
        </Grid>
      </Paper>
    </Page>
  );
};

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image {
          publicURL
        }
        title
        path
        jobtitle
      }
      html
    }
  }
`;

export default withRoot(withStyles(styles)(Detail));
