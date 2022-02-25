import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  CardContent, Button, TextField, Stack,
} from '@mui/material';
import { loginUser, useAuthContext } from "../others/store";

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const history = useHistory();

  const { dispatch } = useAuthContext();

  // Track input changes
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const payload = new URLSearchParams();
    payload.append('email', email);
    payload.append('password', password);
    try {
      const res = await loginUser(dispatch, payload);
      if (!res.currentUser) setError(true);
      history.push('/home');
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <CardContent sx={{ mt: 4 }}>
      {!error && (
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <TextField label="E-mail" variant="outlined" onChange={handleEmail} />
          <TextField label="Password" type="password" variant="outlined" onChange={handlePassword} />
        </Stack>
      )}

      {error && (
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <TextField error label="E-mail" variant="outlined" onChange={handleEmail} />
        <TextField error label="Password" type="password" variant="outlined" onChange={handlePassword} helperText="Incorrect email or password." />
      </Stack>
      )}
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Button sx={{ mt: 2 }} variant="contained" onClick={handleClick}>Log In</Button>

      </Stack>

    </CardContent>

  );
}
