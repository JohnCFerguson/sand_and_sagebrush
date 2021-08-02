import withRoot from "../../utils/withRoot";
import React from "react";
import GridList from "@material-ui/core/GridList";
import SEO from "../../components/SEO";
import Page from "../../components/Page";
import Iframe from "react-iframe";

const Book = props => {
  return (
    <Page title="Book your next appointment">
      <SEO title="Book your next appointment" />
      <GridList cellHeight={500} cols={1}>
          <Iframe
display="initial"
              frameBorder="0"
              height="600px"
              id="bookingSite"
              position="relative"
              src="https://online-booking.salonbiz.com/olb/!page.widget_start?wbid=c6265t202106221207p9pb865B43e7kP5hA28ck&theme=5533"
              width="100%"/>
      </GridList>
    </Page>
  );
};

export default withRoot(Book);
