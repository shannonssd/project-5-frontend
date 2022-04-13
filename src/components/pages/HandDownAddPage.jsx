/*
 * ========================================================
 * ========================================================
 *
 *                       Imports
 *
 * ========================================================
 * ========================================================
 */
import React from "react";
import { useHistory } from "react-router-dom";
import {
  Typography, Stack,
} from '@mui/material';
import Form from "../organisms/Form";
import BackIcon from "../molecules/BackIcon";

/*
 * ========================================================
 * ========================================================
 *
 *             Component for HandDownAddPage
 *
 * ========================================================
 * ========================================================
 */
export default function HandDownAddPage() {
  const history = useHistory();
  const goBack = () => {
    history.push('/hmd-list');
  };

  return (
    <div className="mobile">
      <Stack
        direction="row"
        alignItems="center"
      >
        <BackIcon onClick={goBack} />
        <Typography variant="h1">
          Add an item
        </Typography>
      </Stack>
      <Form />
    </div>
  );
}
