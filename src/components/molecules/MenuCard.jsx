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
import { Stack, Typography } from '@mui/material';
import mainTheme from '../../theme';

/*
 * ========================================================
 * ========================================================
 *
 *                 StyledCard CSS
 *
 * ========================================================
 * ========================================================
 */
const StyledCard = styled('div')({
  backgroundColor: mainTheme.palette.dusty.main,
  padding: 10,
  borderRadius: 20,
  height: 100,
  display: "flex",
  direction: "column",
  justifyContent: "center",
});

/*
 * ========================================================
 * ========================================================
 *
 *                Component for MenuCard
 *
 * ========================================================
 * ========================================================
 */
export default function MenuCard({ icon, header, onClick }) {
  return (
    <StyledCard onClick={onClick}>
      <Stack
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        {icon}
        <Typography variant="h2" sx={{ textAlign: "center", color: mainTheme.palette.dusty.dark }}>{header}</Typography>
      </Stack>
    </StyledCard>
  );
}
