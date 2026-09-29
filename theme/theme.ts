"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",

  typography: {
    fontFamily: "var(--font-abar-mid), sans-serif",
  },

  palette: {
    mode: "light",
    primary: {
      main: "#02ADF7",
    },
    secondary: {
      main: "#26E05A",
    },
    background: {
      default: "#F5F8FA",
      paper: "#FCFDFD",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#4C4C4D",
    },
  },

  shape: {
    borderRadius: 20,
  },
});

export default theme;
