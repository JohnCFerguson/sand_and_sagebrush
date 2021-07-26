import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "gatsby";
import Menu from "./Menu";
import MenuMobile from "./MenuMobile";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import logo from "./../pages/logos/S+S-Logo-0221_Full Color Logo Horizontal .png"

const useStyles = makeStyles({
  logo: {
    maxWidth: 500,
    marginTop: -15,
    marginLeft: -40,
    marginBottom: -35,
    "@media (max-width: 1280px)": {
      maxWidth: 250,
      marginTop: -10,
      marginLeft: -20,
      marginBottom: -25
    }
  },
  gridStyle: {
    "@media (max-width: 1280px)": {
      padding: 10
    }
  }
});


const Header = props => {
  const classes = useStyles();

  return (
    <AppBar id="appBar">
      <Toolbar>
        <Grid alignItems="center" container justify="space-between" spacing={1}>
          <Link to="/">
            <img src={logo} alt="Sand+Sagebrush Logo img" className={classes.logo} />
          </Link>
          <Grid item />
          <Grid item className={classes.gridStyle}>
            <Hidden smDown>
              <Typography component="span" variant="caption">
                <Menu />
              </Typography>
            </Hidden>
            <Hidden mdUp>
              <MenuMobile />
            </Hidden>
          </Grid>
        </Grid>
        <Grid item />
      </Toolbar>
    </AppBar>
  );
};

export default () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            contact {
              email
              phone
              address
            }
          }
        }
      }
    `}
    render={data => <Header data={data} />}
  />
);
