/* eslint-disable no-unused-vars */
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "typeface-roboto";
import Routes from "./Routes";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core";
import GlobalStyles from "./theme/GlobalStyles";
import Store from "./redux/store";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Provider store={Store()}>
          <Routes />
        </Provider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
