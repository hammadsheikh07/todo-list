import { createTheme } from "@mui/material/styles";


// Create a theme instance.
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Poppins",
      color:"#000000"
    },
    body1:{
      fontSize:"12px"
    },
    body2:
    {
        fontSize:"14px",
       
    },
    h1:
    {
      fontSize:"56px",
      fontWeight:"600"
    }
  },
});

export default theme;
