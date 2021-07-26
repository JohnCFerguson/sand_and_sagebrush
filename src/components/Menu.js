import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Instagram, } from "mdi-material-ui";
import withStyles from "@material-ui/styles/withStyles";
import './../css/typography.css';

const styles = theme => ({
  menuButton: {
    color: theme.palette.secondary.dark,
    fontFamily: "StayClassyDuoSerif",
  },
});

const Menu = withStyles(styles)(props => {
  const {
    classes,
    data: {
      site: {
        siteMetadata: { menuLinks },
      },
    },
  } = props;
  return (
    <>
      {menuLinks.map(link => (
        <Link key={link.name} to={link.link}>
          <Button className={classes.menuButton}>{link.name}</Button>
        </Link>
      ))}
      <a
        href="https://www.instagram.com/sandandsagebrush/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <IconButton className={classes.menuButton}>
          <Instagram />
        </IconButton>
      </a>
    </>
  );
});

export default () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => <Menu data={data} />}
  />
);
