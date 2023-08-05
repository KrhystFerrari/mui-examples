import { Button, Typography } from "@mui/material";

function App() {
  return (
    <div>
      <Typography variant="h1" component={"h1"} sx={{ color: "blue" }}>
        MUI Examples
      </Typography>
      <Button
        variant="contained"
        color="success"
        sx={{ margin: "30px" }}
      >
        Click Me
      </Button>
      <Button variant="text" disabled>Click Me</Button>
      <Button variant="outlined" onClick={() => alert("Clicked !")} size="large">
        Click Me for Action
      </Button>
    </div>
  );
}

export default App;
