"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // Mobile devices
      sm: 600, // Small tablets
      md: 960, // Tablets
      lg: 1280, // Small desktops
      xl: 1536, // Large desktops
    },
  },
  typography: {
    fontFamily: "GoSan, Arial !important",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontWeight: 700,
      fontSize: "5rem",
      "@media (max-width:600px)": {
        fontSize: "3rem",
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: "3.75rem",
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontWeight: 700,
      fontSize: "2.55rem",
      lineHeight: 1.3,
      textTransform: "none",
      "@media (max-width:600px)": {
        fontSize: "1.7rem",
      },
    },
    h4: {
      fontWeight: 700,
      fontSize: "2.125rem",
      lineHeight: 1.3,
      "@media (max-width:600px)": {
        fontSize: "1.3rem",
      },
    },
    h5: {
      fontWeight: 700,
      fontSize: "1.25rem",
      lineHeight: 1.3,
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
    h6: {
      fontWeight: 700,
      fontSize: "1rem",
      lineHeight: 1.4,
      textTransform: "none",
      "@media (max-width:600px)": {
        fontSize: "0.7rem",
      },
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.75,
      "@media (max-width:600px)": {
        fontSize: "0.875rem",
      },
    },
    subtitle2: {
      fontWeight: 700,
      fontSize: "1.2rem",
      lineHeight: 1.57,
      "@media (max-width:600px)": {
        fontSize: "0.5rem",
      },
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      "@media (max-width:600px)": {
        fontSize: "0.75rem",
      },
    },
    body2: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.43,
      "@media (max-width:600px)": {
        fontSize: "0.75rem",
      },
    },
    button: {
      fontWeight: 800,
      fontSize: "1rem",
      lineHeight: 1.75,
      textTransform: "none",
      "@media (max-width:600px)": {
        fontSize: "0.65rem",
      },
    },
    caption: {
      fontSize: "2.125rem",
      lineHeight: 1.3,
      "@media (max-width:600px)": {
        fontSize: "1.3rem",
      },
    },
    overline: {
      fontWeight: 400,
      fontSize: "0.875rem",
      lineHeight: 1.5,
      textTransform: "none",
      "@media (max-width:600px)": {
        fontSize: "0.75rem",
      },
    },
  },
});
