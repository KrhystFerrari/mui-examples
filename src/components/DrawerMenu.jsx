import {
  Alert,
  Button,
  CircularProgress,
  Drawer,
  LinearProgress,
  List,
  ListItemButton,
  ListItemText,
  Snackbar,
} from "@mui/material";
import React, { useState } from "react";

const DrawerMenu = () => {
  const [open, setOpen] = useState(false);
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
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {stacks.map((stacks) => (
            <ListItemButton onClick={() => setOpen(false)}>
              <ListItemText primary={stacks} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <br />
      <Snackbar open={true} autoHideDuration={200}>
        <Alert severity="success">Alert in Snackbar</Alert>
      </Snackbar>
      <CircularProgress color="secondary" value={75} />
      <br />
      <LinearProgress  />
    </div>
  );
};

export default DrawerMenu;
