import { Typography } from "@mui/material";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <Typography variant="h1" component={"h1"} sx={{ color: "blue" }}>
        MUI Examples
      </Typography>
      <Form />
    </div>
  );
}

export default App;
