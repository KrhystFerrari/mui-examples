import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const Accord = () => {
  const stacks = [
    "react",
    "next",
    "express",
    "nest",
    "typescript",
    "material ui",
  ];
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={">"}>
          <Typography variant="h6">What is Material UI?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, nesciunt.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Autocomplete
        sx={{ width: 200 }}
        options={stacks}
        renderInput={(params) => (
          <TextField {...params} label="Select a Stack!" />
        )}
      />
    </div>
  );
};

export default Accord;
