// See https://github.com/mui-org/material-ui/tree/master/examples/gatsby
import { SheetsRegistry } from "jss";
import { createTheme } from "@material-ui/core/styles";
import { createGenerateClassName } from "@material-ui/styles";
import "../css/typography.css";

// A theme with custom primary and secondary color.
// It's optional.
const theme = createTheme({
  palette: {
    primary: {
      light: "#f1dcd4",
      main: "#f1dcd4",
      dark: "#f1dcd4"
    },
    secondary: {
      light: "#8a807b",
      main: "#8a807b",
      dark: "#8a807b",
    },
  },
  typography: {
    useNextVariants: true,
  },
});

function createPageContext() {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!typeof window !== "undefined") {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
