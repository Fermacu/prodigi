import React from "react";

//React router dom
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pages
import Home from "./Pages/Home";

//UI Material
import { ThemeProvider } from "@mui/material";

//Theme
import { theme } from "./theme";
import AppViewport from "./Components/AppViewport";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppViewport page={<Home/>} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
