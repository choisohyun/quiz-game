import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";

import { theme } from "@Style/theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Reset />
      </ThemeProvider>
    </>
  );
};

export default App;
