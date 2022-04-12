/*
 * ========================================================
 * ========================================================
 *
 *                       Imports
 *
 * ========================================================
 * ========================================================
 */
import React from 'react';
import { styled } from '@mui/system';
import { Stack, Avatar, Typography } from '@mui/material';

/*
 * ========================================================
 * ========================================================
 *
 *                       Row CSS
 *
 * ========================================================
 * ========================================================
 */
const Row = styled('div')({
  backgroundColor: '#ffffff91',
  padding: 10,
  marginLeft: -20,
  marginRight: -20,
  marginBottom: 1,
});

/*
 * ========================================================
 * ========================================================
 *
 *                Component for MemberRow
 *
 * ========================================================
 * ========================================================
 */
function MemberRow({
  photo, name, address, onClick,
}) {
  return (
    <Row onClick={onClick}>
      <Stack
        direction="row"
        spacing={4}
        alignItems="center"
        px="10px"
      >
        <Avatar src={photo} alt={name} sx={{ width: 40, height: 40 }} />
        <Stack
          direction="column"
          spacing={1}
          justifyContent="flex-start"
        >
          <Typography variant="h2">
            {name}
          </Typography>
          <Typography variant="caption">{address}</Typography>
        </Stack>
      </Stack>

    </Row>
  );
}

export default MemberRow;
