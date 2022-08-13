import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
      color:"#000000"
    },
    body1:{
      color:"#1A1A1A99"
    },
    h1:
    {
      fontSize:"56px",
      fontWeight:"600"
    }
  },
});

export default theme;
