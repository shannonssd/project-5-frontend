/*
 * ========================================================
 *                       Imports
 * ========================================================
 */
import "./App.css";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import mainTheme from "./theme";
import ItemsPage from "./components/hand-me-down/Page";

/*
 * ========================================================
 *                       App
 * ========================================================
 */
export default function App() {
  // set view state?
  return (
    <ThemeProvider theme={mainTheme}>
      <div>
        <ItemsPage />
      </div>
    </ThemeProvider>
  );
}
