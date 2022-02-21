import React, { useState } from "react";
import axios from "axios";
import {
  CardContent, Button, TextField, Stack,
} from '@mui/material';

export default function Login({ setView }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);

  // Track input changes
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Send email and password to backend
  const handleClick = async (e) => {
    e.preventDefault();
    console.log('<== backend url ==>', process.env.REACT_APP_BACKEND_URL);
    console.log('<== sending to backend ==>', { email, password });
    try {
      const result = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`, { email, password });
      console.log('<== result from BE ==>', result.data);

      if (result.data.success) setView('home');

      setView('home');
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <CardContent>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {!error && (
        <div>
          <TextField label="E-mail" variant="outlined" onChange={handleEmail} />
          <TextField label="Password" type="password" variant="outlined" onChange={handlePassword} />
        </div>
        )}

        {error && (
          <div>
            <TextField error label="E-mail" variant="outlined" onChange={handleEmail} />
            <TextField error label="Password" type="password" variant="outlined" onChange={handlePassword} helperText="Incorrect email or password. Try again." />
          </div>
        )}

        <Button variant="contained" onClick={handleClick}>
          Log In
        </Button>
      </Stack>
    </CardContent>

  );
}
