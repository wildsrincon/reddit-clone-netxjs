/* eslint-disable new-cap */
import { Quicksand, Roboto } from "@next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const quicksand = Quicksand({
  weight: ["300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    background: {
      paper: "#1b2330",
      default: "#0d1218",
    },
    primary: {
      main: "rgba(2, 106, 167, 1)",
      contrastText: "#fff",
    },
    secondary: {
      main: "rgba(78, 151, 194, 1)",
      contrastText: "#fff",
    },
    error: {
      main: "#f44336",
      contrastText: "#fff",
    },
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.38)",
    },
  },
  typography: {
    htmlFontSize: 16,
    button: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      textTransform: "uppercase",
    },
    fontFamily: [
      quicksand.style.fontFamily,
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
    ].join(","),
    h1: {
      fontFamily: quicksand.style.fontFamily,
      fontSize: "6rem",
      fontWeight: 300,
      lineHeight: 1.167,
      letterSpacing: "-0.01562em",
      color: "#fff",
    },
    h2: {
      fontFamily: quicksand.style.fontFamily,
      fontSize: "3.75rem",
      fontWeight: 300,
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
      color: "#fff",
    },
    h3: {
      fontFamily: quicksand.style.fontFamily,
      color: "#fff",
      fontSize: "3rem",
      fontWeight: 500,
      lineHeight: 1.167,
      letterSpacing: "0em",
    },
    h4: {
      fontFamily: quicksand.style.fontFamily,
      color: "#fff",
      fontSize: "2.125rem",
      fontWeight: 500,
      lineHeight: 1.235,
      letterSpacing: "0.00735em",
    },
    h5: {
      fontFamily: quicksand.style.fontFamily,
      color: "#fff",
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: 1.334,
      letterSpacing: "0em",
    },
    h6: {
      fontFamily: quicksand.style.fontFamily,
      color: "#fff",
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
    },
    subtitle1: {
      fontFamily: roboto.style.fontFamily,
      fontSize: "1rem",
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
      color: "#d1d5db",
    },
    subtitle2: {
      fontFamily: roboto.style.fontFamily,
      fontSize: "0.875rem",
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
      color: "#d1d5db",
    },
    body1: {
      fontFamily: roboto.style.fontFamily,
      fontSize: "1rem",
      lineHeight: 1.75,
      color: "#d1d5db",
    },
    body2: {
      fontFamily: roboto.style.fontFamily,
      fontSize: "1rem",
      lineHeight: 1.75,
      color: "#9CA3AF",
    },
  },
});


export default responsiveFontSizes(theme);
