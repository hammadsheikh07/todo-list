import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Box  py={0.5} sx={{backgroundColor:"#1976D2"}}>
        <Typography textAlign={"center"} variant="body2" sx={{fontWeight:"500",color:"white"}}>Made by Muhammad Hammad Shahid</Typography>
      </Box>
    </div>
  );
};

export default Footer;
