import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import { useState, useRef } from "react";
import "./index.css";
const App = () => {
  const [newWork, changeWork] = useState("");
  const [containerOne, changeOne] = useState([]);
  const [containerTwo, changeTwo] = useState([]);
  const [containerThree, changeThree] = useState([]);
  const ref = useRef();
  const addwork = (e) => {
    e.preventDefault();
    changeOne((containerOne) => [...containerOne, { data: newWork }]);
    changeWork("");
  };
  const handleOneright = (data, index) => {
    containerOne.splice(index, 1);
    changeTwo((containerTwo) => [...containerTwo, { data: data }]);
  };
  const handleTworight = (data, index) => {
    containerTwo.splice(index, 1);
    changeThree((containerThree) => [...containerThree, { data: data }]);
  };
  const handleTwoleft = (data, index) => {
    containerTwo.splice(index, 1);
    changeOne((containerOne) => [...containerOne, { data: data }]);
  };
  const handleThreeleft = (data, index) => {
    containerThree.splice(index, 1);
    changeTwo((containerTwo) => [...containerTwo, { data: data }]);
  };
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box mx="auto">
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
            <form onSubmit={(e) => addwork(e)} ref={ref}>
              <Box
                mt={3}
                px={10}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <TextField
                  onChange={(e) => changeWork(e.target.value)}
                  multiline
                  maxRows={3}
                  value={newWork}
                  sx={{ minWidth: "300px", backgroundColor: "white" }}
                  label="Enter Your Work"
                ></TextField>
                <Button sx={{ ml: 2 }} variant="contained" type="submit">
                  Add
                </Button>
              </Box>
            </form>
          </Box>
          <Box
            display="flex"
            mx="auto"
            alignItems="center"
            justifyContent="center"
            py={4}
            sx={{ flexWrap: "wrap" }}
          >
            <Box
              mx={2}
              p={1}
              mt={4}
              px={3}
              sx={{
                width: "330px",
                height: "350px",
                backgroundColor: "white",
                boxShadow: "0 0 10px rgba(0,0,0,0.33)",
                borderRadius: "10px",
                overflowY: "scroll",
              }}
            >
              {containerOne.map((entry, index) => (
                <Box
                  display="flex"
                  alignItems="center"
                  p={1}
                  mt={2}
                  justifyContent="space-between"
                  sx={{
                    backgroundColor: "#f2f2f2",
                    boxShadow: "0 0 10px rgba(1, 51, 125,0.22)",
                    borderRadius: "3px",
                  }}
                >
                  <Box>
                    <Typography variant="body1">{entry.data}</Typography>
                  </Box>
                  <Box>
                    <Button>&#60;</Button>
                    <Button onClick={(e) => handleOneright(entry.data, index)}>
                      &#62;
                    </Button>
                  </Box>
                </Box>
              ))}
            </Box>
            <Box
              mx={2}
              p={1}
              mt={4}
              px={3}
              sx={{
                width: "330px",
                height: "350px",
                backgroundColor: "white",
                boxShadow: "0 0 10px rgba(0,0,0,0.33)",
                borderRadius: "10px",
                overflowY: "scroll",
              }}
            >
              {containerTwo.map((entry, index) => (
                <Box
                  display="flex"
                  alignItems="center"
                  p={1}
                  mt={2}
                  justifyContent="space-between"
                  sx={{
                    backgroundColor: "#f2f2f2",
                    boxShadow: "0 0 10px rgba(1, 51, 125,0.22)",
                    borderRadius: "3px",
                  }}
                >
                  <Box>
                    <Typography variant="body1">{entry.data}</Typography>
                  </Box>
                  <Box>
                    <Button onClick={(e) => handleTwoleft(entry.data, index)}>
                      &#60;
                    </Button>
                    <Button onClick={(e) => handleTworight(entry.data, index)}>
                      &#62;
                    </Button>
                  </Box>
                </Box>
              ))}
            </Box>
            <Box
              mx={2}
              py={1}
              px={3}
              mt={4}
              sx={{
                width: "330px",
                height: "350px",
                backgroundColor: "white",
                boxShadow: "0 0 10px rgba(0,0,0,0.33)",
                borderRadius: "10px",
                overflowY: "scroll",
              }}
            >
              {containerThree.map((entry, index) => (
                <Box
                  display="flex"
                  alignItems="center"
                  p={1}
                  mt={2}
                  justifyContent="space-between"
                  sx={{
                    backgroundColor: "#f2f2f2",
                    boxShadow: "0 0 10px rgba(1, 51, 125,0.22)",
                    borderRadius: "3px",
                  }}
                >
                  <Box>
                    <Typography variant="body1">{entry.data}</Typography>
                  </Box>
                  <Box>
                    <Button onClick={(e) => handleThreeleft(entry.data, index)}>
                      &#60;
                    </Button>
                    <Button>&#62;</Button>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default App;
