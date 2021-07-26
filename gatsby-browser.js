import ReactDOM from "react-dom";
import './src/css/typography.css'

export const replaceHydrateFunction = () => (element, container, callback) =>
  ReactDOM.render(element, container, callback);
