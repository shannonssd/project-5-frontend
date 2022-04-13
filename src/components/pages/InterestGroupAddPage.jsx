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
import { Stack, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import AddInterestGroup from '../organisms/AddInterestGroup';
import BackIcon from '../molecules/BackIcon';

/*
 * ========================================================
 * ========================================================
 *
 *             Component for InterestGroupAddPage
 *
 * ========================================================
 * ========================================================
 */
function InterestGroupAddPage() {
  const history = useHistory();
  const goBack = () => {
    history.push('/interest-group-list');
  };
  return (
    <div className="mobile">
      <Stack
        direction="row-reverse"
      >
        <Typography variant="h1">
          Add an Interest Group
        </Typography>
        <BackIcon onClick={goBack} />

      </Stack>
      <AddInterestGroup />
    </div>
  );
}

export default InterestGroupAddPage;
