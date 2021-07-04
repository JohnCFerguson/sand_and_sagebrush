import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import IconButton from "@material-ui/core/IconButton";
import { Instagram, ClockOutline, ClockOut } from "mdi-material-ui";
import { DotsVertical } from "mdi-material-ui";
import withStyles from "@material-ui/styles/withStyles";

const styles = {
  dotsVerticalIcon: {
    color: "#efefef",
  },
};

class MenuMobile extends React.Component {
  state = {
    anchorEl: null,
    open: false,
  };

  handleClick = (event) => {
    const { currentTarget } = event;
    this.setState((state) => ({
      anchorEl: currentTarget,
      open: !state.open
    }));
  };

  handleClickAway = () => {
    this.setState({
      open: false
    });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const {
      classes,
      data: {
        site: {
          siteMetadata: { menuLinks },
        },
      },
    } = this.props;
    return (
      <>
        <IconButton onClick={this.handleClick}>
          <DotsVertical className={classes.dotsVerticalIcon} />
        </IconButton>
        <ClickAwayListener onClickAway={this.handleClickAway}>
          <Menu
            anchorEl={anchorEl}
            onClose={this.handleClose}
            open={Boolean(anchorEl)}
          >
            {menuLinks.map(link => (
              <Link key={link.name} to={link.link}>
                <MenuItem>{link.name}</MenuItem>
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
          </Menu>
        </ClickAwayListener>
      </>
    );
  }
}

const StyledMenuMobile = withStyles(styles)(MenuMobile);

export default props => (
  <StaticQuery
    query={graphql`
      query MenuMobileQuery {
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
    render={data => <StyledMenuMobile active={props.active} data={data} />}
  />
);