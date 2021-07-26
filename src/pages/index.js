import withRoot from "../utils/withRoot";
import React from "react";
import { graphql, } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
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
  //console.log(logoImg);
  return (
    <Page title="The Beautiful Sand and Sagebrush Salon and Spa" image={logoImg}>
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
