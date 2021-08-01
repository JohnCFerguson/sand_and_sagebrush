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
  <Card className={classes.cardFont} style={style} >
    <CardHeader
      avatar={avatar ? avatar : null}
      classes={{
        title: classes.cardFont
      }}
      subheader={subheader ? subheader : null}
      title={title}

    />
    <CardContent className={classes.cardFont}>{children}</CardContent>
    <CardActions className={classes.cardActions, classes.cardFont}>{action}</CardActions>
  </Card>
);

export default withStyles(styles)(MyCard);
