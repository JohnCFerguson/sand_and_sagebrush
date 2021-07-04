import withRoot from "../utils/withRoot";
import React from "react";
import { graphql, Link } from "gatsby";
import SEO from "../components/SEO";
import Card from "../components/Card";
import Page from "../components/Page";
import HomeFeatures from "../components/HomeFeatures";
import Button from "@material-ui/core/Button";
import Carousel from "../components/Carousel";
import Avatar from "@material-ui/core/Avatar";
import { Gift } from "mdi-material-ui";
import withStyles from "@material-ui/styles/withStyles";

const styles = () => ({
  root: {
    fontWeight: "bold",
  },
});
const Home = props => {
  //const products = props.data.allMarkdownRemark.edges;
  return (
    <Page title="The Beautiful Sand and Sagebrush Salon and Spa">
      <SEO title="Home">
        <meta
          content="A beautiful, open Salon and Spa where the most amazing personnel will take care of your Salon and Spa Needs"
          name="description"
        />
      </SEO>

      <HomeFeatures />

    </Page>
  );
};

export const query = graphql`
  query {
    allFile(filter: { extension: { eq: "jpg" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/team/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            image {
              publicURL
            }
            path
            title
            date(formatString: "DD MMMM YYYY")
          }
          excerpt
        }
      }
    }
  }
`;

export default withRoot(withStyles(styles)(Home));

/*      <Card
        action={
          <Button
            className={props.classes.root}
            color="secondary"
            component={Link}
            to="/team"
            variant="contained"
          >
            View All Products
          </Button>
        }
        avatar={
          <Avatar>
            <Gift />
          </Avatar>
        }
        style={{ minHeight: 523 }}
        title="Our Products"
      >
        <Carousel items={products} />
      </Card>*/