import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
const App = () => {
  const [newWork, changeWork] = useState("");
  function addwork(e) {
    e.preventDefault();
    console.log(newWork);
  }
  return (
    <div backgroundColor="#f2f2f2">
      <Box
        display="flex"
        flexDirection="column"
        sx={{ backgroundColor: "#f2f2f2" }}
      >
        <Box
          mt={3}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mx="auto"
        >
          <Typography variant="h1" sx={{ textAlign: "center" }}>
            Todo list
          </Typography>
          <form onSubmit={(e) => addwork(e)}>
            <Box mt={3} px={10} display="flex" alignItems="center">
              <TextField
                onChange={(e) => changeWork(e.target.value)}
                multiline
                maxRows={3}
                value={newWork}
                sx={{ minWidth: "300px",backgroundColor:"white" }}
                label="Enter Your Work"
              ></TextField>
              <Button sx={{ ml: 2 }} variant="contained" type="submit">
                Add
              </Button>
            </Box>
          </form>
        </Box>
        <Box display="flex" mx="auto" alignItems="center" justifyContent="center"  py={4} sx={{ flexWrap: "wrap" }}>
          <Box
            mx={2}
            p={3}
            mt={4}
            sx={{
              width: "330px",
              height: "350px",
              backgroundColor: "white",
              boxShadow: "0 0 10px rgba(0,0,0,0.33)",
            }}
          >
            <Box>Hu</Box>
          </Box>
          <Box
            mx={4}
            p={3}
            mt={4}
            sx={{
              width: "330px",
              height: "350px",
              backgroundColor: "white",
              boxShadow: "0 0 10px rgba(0,0,0,0.33)",
            }}
          >
            Hi
          </Box>
          <Box
            mx={4}
            p={3}
            mt={4}
            sx={{
              width: "330px",
              height: "350px",
              backgroundColor: "white",
              boxShadow: "0 0 10px rgba(0,0,0,0.33)",
            }}
          >
            Hi
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default App;
