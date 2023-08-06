import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";

const Accord = () => {
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
    </div>
  );
};

export default Accord;
