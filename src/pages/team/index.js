import withRoot from "../../utils/withRoot";
import React from "react";
import { Link, graphql, withPrefix } from "gatsby";
import Typography from "@material-ui/core/Typography";
import SEO from "../../components/SEO";
import Page from "../../components/Page";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Team = props => {
  const teams = props.data.allMarkdownRemark.edges;
  return (
    <Page title="Meet the Team">
      <SEO title="Meet the Team" />

      <GridList cellHeight={'auto'} cols={1}>
        {teams.map(edge => {
          const {
            node: {
              frontmatter: {
                path,
                title,
                image,
                jobtitle,
              },
            },
          } = edge;
          const tempImage = getImage(image);
          return (
            <Link key={path} to={path}>
              <GridListTile cols={1}>
                <GatsbyImage image={tempImage} alt={title} />
                <GridListTileBar
                  subtitle={jobtitle}
                  title={title}
                />
              </GridListTile>
            </Link>
          );
        })}
      </GridList>
    </Page>
  );
};

export const query = graphql`
  query TeamQuery {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/team/"}}
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      edges {
        node {
          html
          frontmatter {
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            title
            path
            jobtitle
          }
        }
      }
    }
  }
`;

export default withRoot(Team);
