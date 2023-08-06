import { Typography, AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import React, { useState } from "react";
import ResponsiveGrid from "./components/ResponsiveGrid";
// import DrawerMenu from "./components/DrawerMenu";
// import Accord from "./components/Accord";
// import ListComponent from "./components/ListComponent";
// import Containers from "./components/Containers";
//import Modals from "./components/Modals";
//import Cards from "./components/Cards";
//import Form from "./components/Form";

function App() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h4">LOGO</Typography>
          <Tabs
            sx={{ marginLeft: "auto" }}
            value={value}
            onChange={(e, val) => setValue(val)}
            textColor="inherit"
            indicatorColor="secondary"
          >
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Contact" />
          </Tabs>
        </Toolbar>
      </AppBar>
      {/* <Form /> */}
      <div style={{ marginTop: 100 }}>
        {/*<Cards />*/}
        {/* <Modals /> */}
        {/* <Containers /> */}
        {/* <ListComponent /> */}
        {/* <Accord /> */}
        {/* <DrawerMenu /> */}
        <ResponsiveGrid />
      </div>
    </div>
  );
}

export default App;
