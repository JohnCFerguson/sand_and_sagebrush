import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import withStyles from "@material-ui/styles/withStyles";
import "./../css/typography.css";

const styles = theme => ({
  cardActions: {
    float: "right",
  },
  cardFont: {
    fontFamily: "StayClassyDuoSerif",
    textAlign: "center",
    color: theme.palette.secondary.dark,
  }
});

const MyCard = ({
  children,
  classes,
  title,
  subheader,
  avatar,
  action,
  style = {},
}) => (
  <Card style={style} className={classes.cardFont}>
    <CardHeader
      avatar={avatar ? avatar : null}
      subheader={subheader ? subheader : null}
      title={title}
      classes={{
        title: classes.cardFont
      }} 
    />
    <CardContent className={classes.cardFont}>{children}</CardContent>
    <CardActions className={classes.cardActions, classes.cardFont}>{action}</CardActions>
  </Card>
);

export default withStyles(styles)(MyCard);
