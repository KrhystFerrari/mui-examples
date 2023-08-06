import { Container, Typography } from "@mui/material";
import React from "react";

const Containers = () => {
  return (
    <div>
      <Container
        sx={{ background: "yellow", textAlign: "center" }}
        maxWidth="xs"
      >
        <Typography variant="body2">This is XS (Extra Small)</Typography>
      </Container>
      <br />
      <Container
        sx={{ background: "yellow", textAlign: "center" }}
        maxWidth="sm"
      >
        <Typography variant="body2">This is SM (Small)</Typography>
      </Container>
      <br />
      <Container
        sx={{ background: "yellow", textAlign: "center" }}
        maxWidth="md"
      >
        <Typography variant="body2">This is MD (Medium)</Typography>
      </Container>
      <br />
      <Container
        sx={{ background: "yellow", textAlign: "center" }}
        maxWidth="lg"
      >
        <Typography variant="body2">This is LG (Large)</Typography>
      </Container>
      <br />
      <Container
        sx={{ background: "yellow", textAlign: "center" }}
        maxWidth="xl"
      >
        <Typography variant="body2">This is XL (Extra Large)</Typography>
      </Container>
    </div>
  );
};

export default Containers;
