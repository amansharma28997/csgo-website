import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      light: "#6e6c88",
      main: "#42415b",
      dark: "#1a1b31",
      contrastText: "#fff",
    },
    secondary: {
      light: "#8e81d7",
      main: "#5e54a5",
      dark: "#2e2b76",
      contrastText: "#fff",
    },
  },
});
theme = responsiveFontSizes(theme);
ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
