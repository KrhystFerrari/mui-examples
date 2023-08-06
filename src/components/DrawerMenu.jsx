import AddReactionIcon from '@mui/icons-material/AddReaction'
import {
  Alert,
  Button,
  CircularProgress,
  Drawer,
  IconButton,
  LinearProgress,
  List,
  ListItemButton,
  ListItemText,
  Rating,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const DrawerMenu = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();

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
      <LinearProgress />
      <br />
      <Rating value={value} onChange={(e, val) => setValue(val)} size="large" precision={0.5} />
      <Typography>Rated {value !== undefined ? value : 0} stars!</Typography>
      <br /><br />
      <IconButton onClick={() => alert('Icon BTN')}>
        <AddReactionIcon color='secondary' />
      </IconButton>
      
    </div>
  );
};

export default DrawerMenu;
