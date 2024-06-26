import { createTheme } from "@mui/material";
import { configuration } from "./configuration";

//Fonts
//import "@fontsource/montserrat/400.css";
//import "@fontsource/montserrat/700.css";

export const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#00bccd",
    },
  },
  typography: {
    // fontFamily: "Montserrat",
    button: {
      fontWeight: 900,
    },
  },
  shape: {
    borderRadius: 15,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: configuration.customization.buttons.textColor,
          backgroundColor: configuration.customization.buttons.backgroundColor,
          fontSize: "11px",
        },
      },
    },
  },
});
