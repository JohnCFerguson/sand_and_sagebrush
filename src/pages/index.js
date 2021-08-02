import withRoot from "../utils/withRoot";
import React from "react";
import { graphql, } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import SEO from "../components/SEO";
import Page from "../components/Page";
import HomeFeatures from "../components/HomeFeatures";
import withStyles from "@material-ui/styles/withStyles";
import "./../css/typography.css";

const styles = () => ({
  root: {
    fontWeight: "bold",
    fontFamily: "StayClassyDuoSerrif"
  },
});

const Home = props => {
  const logoImg = getImage(props.data.allFile.edges[0].node);
  return (
    <Page image={logoImg} title="The Beautiful Sand and Sagebrush Salon and Spa">
      <SEO title="Home">
        <meta
          content="Welcome to Sand and Sagebrush, an Aveda salon located right in the heart of downtown Elko Nevada. At Sand and Sagebrush our mission is to always provide our guests with a one of a kind service. Through thoughtful care,  kindness, and attention to detail our goal is ensure an experience and environment where confidence and self love are abundant."
          name="description"
        />
      </SEO>

      <HomeFeatures />

    </Page>
  );
};

export const query = graphql`
  query LogoQuery {
    allFile(
      filter: {relativePath: {eq: "logos/S+S-Logo-0221_Full_Color_Logo_Vertical_Cropped.png"}}
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default withRoot(withStyles(styles)(Home));
