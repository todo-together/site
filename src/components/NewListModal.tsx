import React, { useState } from "react";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ClickAwayListener from "@mui/material/ClickAwayListener";
import IconButton from "@mui/material/IconButton";
import Icon from "@mui/material/Icon";


export default function NewListModal({ open = false, onClose, onSubmit }: { open: boolean, onClose: () => void, onSubmit: (title: string, description: string) => void }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <ClickAwayListener onClickAway={onClose}>
      <Modal
        open={open}
        onClose={onClose}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minWidth: "50%",
            boxShadow: 24,
            backgroundColor: "white",
            p: 6,
            paddingBottom: "75px",
          }}
        >
          <div style={{display: "flex"}}>
            <div style={{flexGrow: "1"}} />
            <IconButton onClick={onClose}>
              <Icon>
                close
              </Icon>
            </IconButton>
          </div>
          <Typography variant="h5">
            Create a New List
          </Typography>

          <Divider style={{ margin: "15px" }} />

          <Stack spacing={2}>
            <TextField
              id="new-list-title"
              variant="standard"
              label="Title"
              required
            />
            <TextField
              id="new-list-description"
              variant="standard"
              label="Description"
              multiline
            />

            <ButtonGroup>
              <Button onClick={() => onSubmit("", "")}>
                Create
              </Button>
              <Button onClick={onClose}>
                Cancel
              </Button>
            </ButtonGroup>

          </Stack>
        </Box>
      </Modal>
    </ClickAwayListener>
  );
}