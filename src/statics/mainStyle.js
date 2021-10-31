import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
      baseColor: "#292F36",
      mainColor:"#CC9CD9",
      white:"#FFFFFF",
      black: "#000000",
      lightPink: "#FBEAFF",
      backgroundGray: "#d3d3d3",
      googleRed: "#de5246"
    },
    fontSizes: {
      xs: "14px",  
      sm: "18px",
      md: "24px",
      lg: "32px",
      xl: "64px",
    },
    breakpoints: {
		xs: '400px',
		sm: '600px',
		md: '960px',
		lg: '1280px',
		xl: '1920px',
	},
  };
  
  const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
  
  export default Theme;