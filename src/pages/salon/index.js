import withRoot from "../../utils/withRoot";
import React from "react";
import { graphql, } from "gatsby";
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
        <Gallery images={salon} />
      </Card>
    </Page>
  );
};

export const query = graphql`
  query {
    allFile(filter: {extension: {eq: "jpeg"}, absolutePath: {regex: "/salon/"}}) {
      edges {
        node {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 270
              height: 270
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

