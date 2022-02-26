import React from 'react';
import { Paper, IconButton, InputBase } from "@mui/material";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import NavMenu from '../organisms/NavMenu';

function MessageInput({ id, handleInput, handleSend }) {
  return (
    <Paper sx={{
      display: "flex",
      justifyContent: "space-between",
      width: "300px",
      borderRadius: "20px",
      bgcolor: "#fffff",
      px: "10px",
      py: "4px",
      position: "absolute",
      bottom: "30px",
      left: "50%",
      zIndex: 50,
      transform: "translateX(-50%)",
    }}
    >
      <NavMenu />
      <InputBase
        id={id}
        sx={{ flex: 1 }}
        onChange={handleInput}
      />
      <IconButton onClick={handleSend}>
        <SendRoundedIcon />
      </IconButton>
    </Paper>

  );
}

export default MessageInput;
