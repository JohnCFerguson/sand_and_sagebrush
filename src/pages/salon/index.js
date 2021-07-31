import withRoot from "../../utils/withRoot";
import React from "react";
import { graphql, } from "gatsby";
import Typography from "@material-ui/core/Typography";
import SEO from "../../components/SEO";
import Page from "../../components/Page";
import Card from "../../components/Card";
import Gallery from '@browniebroke/gatsby-image-gallery'

const Salon = props => {
  const salon =  props.data.allFile.edges.map(({ node }) => node.childImageSharp)
  return (
    <Page title="The Salon">
      <SEO title="The Salon" />
      <Card
        title="The Salon"
      >
        <Typography>Welcome to Sand and Sagebrush, an Aveda salon located right in the heart of downtown Elko Nevada. At Sand and Sagebrush our mission is to always provide our guests with a one of a kind service. Through thoughtful care,  kindness, and attention to detail our goal is ensure an experience and environment where confidence and self love are abundant.</Typography>
        <hr></hr>
        <Gallery images={salon} />
      </Card>
    </Page>
  );
};

export const query = graphql`
  query {
    allFile(filter: {extension: {eq: "jpg"}, absolutePath: {regex: "/salon/"}}) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 300
              height: 300
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`;

export default withRoot(Salon);

