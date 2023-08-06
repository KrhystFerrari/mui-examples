import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React from "react";

const ListComponent = () => {
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
      <List sx={{ width: 250, background: "gray" }}>
        {stacks.map((stacks) => (
          <ListItem>
            <ListItemButton>{">"}</ListItemButton>
            <ListItemText primary={stacks} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ListComponent;
