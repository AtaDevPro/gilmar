"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",

  typography: {
    fontFamily: "var(--font-abar-mid), sans-serif",
  },

  palette: {
    mode: "light",
  },
});

export default theme;
