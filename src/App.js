import { Typography, AppBar, Button, Toolbar } from "@mui/material";
//import Form from "./components/Form";

function App() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h4">LOGO</Typography>
          <Button
            variant="contained"
            color="success"
            sx={{ marginLeft: "auto" }}
          >
            SignIn
          </Button>
        </Toolbar>
      </AppBar>
      {/* <Form /> */}
    </div>
  );
}

export default App;
