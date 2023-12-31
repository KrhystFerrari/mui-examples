import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const Cards = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component={"img"}
          height="140"
          image="https://images.unsplash.com/photo-1691178879907-f6f1ff57de2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
          alt="test"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Full Stack Developer
          </Typography>
          <Typography variant="body2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat,
            quasi.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary" onClick={() => setOpen(true)}>
            Delete
          </Button>
        </CardActions>
      </Card>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Delete this card?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Cards;
