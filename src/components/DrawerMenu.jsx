import { Button, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
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
            {
                stacks.map(stacks => (
                    <ListItemButton onClick={() => setOpen(false)}>
                        <ListItemText primary={stacks} />
                    </ListItemButton>
                ))
            }
        </List>
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
