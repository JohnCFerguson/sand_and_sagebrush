import React from "react";
import { Link } from "gatsby";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/styles/withStyles";

const styles = theme => ({
  featureChip: {
    fontSize: "48px",
    backgroundColor: "#fff",
    border: "1pt solid #eee",
    padding: "25px"
  },
  featureChipRight: {
    fontSize: "16px",
    backgroundColor: "#fff",
    border: "1pt solid #eee",
    float: "right",
  },
  featureGrid: {
    marginBottom: "0px",
    marginTop: "0px"
  },
  avi: {
    width: "40px",
    height: "40px",
    color: "#fff",
    backgroundColor: theme.palette.secondary.light,
  },
});
const HomeFeatures = props => {
  return (
    <Grid
      className={props.classes.featureGrid}
      container
      justify="center"
      spacing={5}
    >
      <Grid item>
        <Link key="bookNow" to="/book">
          <Button variant="outlined" color="secondary" size="large">
            Book Now
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(HomeFeatures);
