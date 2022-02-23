import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  CardContent, Button, TextField, Stack, Typography, FormControl,
} from '@mui/material';
import { signupUser, useAuthContext } from "../others/store";

function Signup() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [street, setStreet] = useState('');
  const [block, setBlock] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [photo, setPhoto] = useState();
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const history = useHistory();
  // Handle input changes
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleStreet = (e) => {
    setStreet(e.target.value);
  };
  const handleBlock = (e) => {
    setBlock(e.target.value);
  };
  const handlePostalCode = (e) => {
    setPostalCode(e.target.value);
  };
  const imageHandler = (e) => {
    setPhoto(e.target.files[0]);
  };

  // Handle button clicks
  const handleClick1 = (e) => {
    e.preventDefault();
    setStep(2);
  };
  const goBackToStep1 = (e) => {
    e.preventDefault();
    setStep(1);
  };
  const handleClick2 = (e) => {
    e.preventDefault();
    setStep(3);
  };
  const goBackToStep2 = (e) => {
    e.preventDefault();
    setStep(2);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append('name', name);
    payload.append('email', email);
    payload.append('password', password);
    payload.append('street', street);
    payload.append('block', block);
    payload.append('postalCode', postalCode);
    payload.append('photo', photo);
    try {
      const res = await signupUser(dispatch, payload);
      console.log('<== sign up res data ==>', res.data);
      if (!res.success) setError(true);
      history.push('/');
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
      />
      {step === 1 && (
        <div>
          <TextField label="Name" variant="outlined" onChange={handleName} value={name} />
          <TextField label="E-mail" variant="outlined" onChange={handleEmail} value={email} />
          <TextField label="Password" type="password" variant="outlined" onChange={handlePassword} value={password} />
          <Button variant="contained" onClick={handleClick1}>Next</Button>

        </div>
      )}
      {step === 2 && (
        <div>
          <Typography variant="h2">Address</Typography>
          <TextField label="Street" variant="outlined" onChange={handleStreet} value={street} />
          <TextField label="Block" variant="outlined" onChange={handleBlock} value={block} />
          <TextField label="PostalCode" variant="outlined" onChange={handlePostalCode} value={postalCode} />
          <Button variant="contained" onClick={handleClick2}>Next</Button>
          <Button variant="contained" onClick={goBackToStep1}>Back</Button>
        </div>
      )}
      {step === 3 && (
        <div>
          <FormControl>
            <label htmlFor={photo}>
              Upload Image
              <input type="file" id={photo} name="photo" onChange={imageHandler} accept="image/*" />
            </label>
          </FormControl>
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
          <Button variant="contained" onClick={goBackToStep2}>Back</Button>
        </div>
      )}
    </CardContent>
  );
}

export default Signup;
