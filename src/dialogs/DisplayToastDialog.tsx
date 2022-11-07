import React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  DialogProps,
} from "@mui/material";

interface SimpleDialogProps extends DialogProps {
  title: string;
  handleClick: () => void;
}

export default function DisplayToastDialog({
  title,
  handleClick,
  ...props
}: SimpleDialogProps) {
    console.log(props)
  return (
    <Dialog {...props}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>I'm Content</DialogContent>
      <DialogActions>
        <Button onClick={() => props.onClose()}>Cancel</Button>
        <Button variant="contained" onClick={() => handleClick()}>
          Create Toast
        </Button>
      </DialogActions>
    </Dialog>
  );
}
