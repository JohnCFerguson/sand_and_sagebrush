import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";
import withStyles from "@material-ui/styles/withStyles";

const styles = theme => ({
  divider: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(3),
  },
  footer: {
    marginBottom: theme.spacing(3),
    whiteSpace: "nowrap",
  },
});

const Footer = withStyles(styles)(props => {
  const {
    classes,
    data: {
      site: {
        siteMetadata: {
          title,
          contact: { email, phone, address },
          development: { company, devEmail }
        },
      },
    },
  } = props;
  return (
    <>
      <Divider className={classes.divider} />
      <footer className={classes.footer} id="footer">
        <span>
          <Typography component="span" variant="caption">
            ©{new Date().getFullYear()} {title}{" "}
            <Hidden only={["xs", "sm"]}>–</Hidden>
            <Hidden only={["xl", "lg", "md"]}>
              <br />
            </Hidden>{" "}
            <a href={`mailto:${email}`}>{email}</a> – <a href={`tel:+${phone}`}>{phone}</a>
              <br />
            {address}
            <Divider className={classes.divider} />
            Website developed by:
              <br />
            {company}
              <br />
            <a href={`mailto:${devEmail}`}>{devEmail}</a>
          </Typography>
        </span>
      </footer>
    </>
  );
});

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
            development {
              company
              devEmail
            }
          }
        }
      }
    `}
    render={data => <Footer data={data} />}
  />
);
