import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from "styled-components";
import { StylesProvider } from "@material-ui/core/styles";
import Theme from './Constants/Theme'
import { WorkProvider } from './context'

ReactDOM.render(
  <WorkProvider>
    <Router basename="/portfolio">
      <StylesProvider injectFirst>
        <ThemeProvider theme={Theme}>
          <App />
        </ThemeProvider>
      </StylesProvider>
    </Router>
  </WorkProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
