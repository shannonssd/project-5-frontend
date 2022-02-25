import React from 'react';
import { styled } from '@mui/system';
import { Stack, Avatar, Typography } from '@mui/material';

const Row = styled('div')({
  backgroundColor: '#ffffff91',
  padding: 10,
  marginLeft: -20,
  marginRight: -20,
  marginBottom: 1,

});
function ChatRow({ texteePhoto, texteeName, onClick }) {
  return (
    <Row onClick={onClick}>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
      >
        <Avatar src={texteePhoto} alt={texteeName} sx={{ width: 40, height: 40 }} />
        <Typography variant="h2">
          {texteeName}
        </Typography>
      </Stack>

    </Row>
  );
}

export default ChatRow;
