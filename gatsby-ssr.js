// See https://github.com/mui-org/material-ui/tree/master/examples/gatsby

const React = require("react");
const { renderToString } = require("react-dom/server");
const StylesProvider = require("@material-ui/styles/StylesProvider").default;
const getPageContext = require("./src/utils/getPageContext").default;

function replaceRenderer({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) {
  // Get the context of the page to collected side effects.
  const muiPageContext = getPageContext();
  const bodyHTML = renderToString(
      <StylesProvider sheetsRegistry={muiPageContext.sheetsRegistry}>
        {bodyComponent}
      </StylesProvider>
    );

  replaceBodyHTMLString(bodyHTML);
  setHeadComponents([
    <style
      dangerouslySetInnerHTML={{
        __html: muiPageContext.sheetsRegistry.toString(),
      }}
      id="jss-server-side"
      key="jss-server-side"
      type="text/css"
    />,
  ]);
}

exports.replaceRenderer = replaceRenderer;
