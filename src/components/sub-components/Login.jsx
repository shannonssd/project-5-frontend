import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  CardContent, Button, TextField, Stack,
} from '@mui/material';

export default function Login() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const history = useHistory();

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
      const data = new URLSearchParams();
      data.append('email', email);
      data.append('password', password);
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/users/login?${data.toString()}`);
      console.log('<== res from BE ==>', res.data);

      if (res.data.success) {
        const {
          userId, name, displayAddress, district,
        } = res.data;

        localStorage.setItem('userId', userId);
        localStorage.setItem('district', district);
        localStorage.setItem('name', name);
        history.push('/home');
      }
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
