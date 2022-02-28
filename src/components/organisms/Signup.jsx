import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  CardContent, Button, TextField, Stack, Typography, FormControl, MobileStepper, Box,
} from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import PersonIcon from '@mui/icons-material/Person';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import HomeIcon from '@mui/icons-material/Home';
import PhotoIcon from '@mui/icons-material/Photo';
import { signupUser, useAuthContext } from "../others/store";
// import BackIcon from "../atoms/BackIcon";

function Signup() {
  // const [step, setStep] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [street, setStreet] = useState('');
  const [block, setBlock] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [photo, setPhoto] = useState();
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const [photoCaption, setPhotoCaption] = useState('No files uploaded');

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
    const [file] = e.target.files;
    // Get the file name and size
    const { name: fileName, size } = file;
    // Convert size in bytes to kilo bytes
    const fileSize = (size / 1000).toFixed(2);
    const uploadedPhoto = `${fileName}-${fileSize}kb`;
    setPhotoCaption(uploadedPhoto);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
      history.go(0);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <CardContent>
      {activeStep === 0 && (
        <Stack
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <PersonIcon />
          <TextField label="Name" variant="outlined" onChange={handleName} value={name} />
          <TextField label="E-mail" variant="outlined" onChange={handleEmail} value={email} />
          <TextField label="Password" type="password" variant="outlined" onChange={handlePassword} value={password} />

        </Stack>
      )}
      {activeStep === 1 && (
        <Stack
          spacing={2}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <HomeIcon />
          <TextField label="Street" variant="outlined" onChange={handleStreet} value={street} />
          <TextField label="Block" variant="outlined" onChange={handleBlock} value={block} />
          <TextField label="PostalCode" variant="outlined" onChange={handlePostalCode} value={postalCode} />
        </Stack>
      )}
      {activeStep === 2 && (
        <FormControl>
          <Box sx={{ height: "232px" }}>
            <Box sx={{ margin: "100px" }}>
              <label htmlFor="item-photo">
                <AddAPhotoIcon color="primary" />
                <input type="file" id="item-photo" name="item-photo" className="file" onChange={imageHandler} accept="image/*" />
                <br />
                <Typography variant="caption">{photoCaption}</Typography>
              </label>
            </Box>
          </Box>
        </FormControl>
      )}

      <MobileStepper
        variant="dots"
        steps={3}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 230, flexGrow: 1 }}
        nextButton={activeStep === 2 ? (
          <Button size="small" onClick={handleSubmit}>
            Submit
            <KeyboardArrowRight />
          </Button>
        ) : (
          <Button size="small" onClick={handleNext} disabled={activeStep === 2}>
            Next
            <KeyboardArrowRight />
          </Button>

        )}
        backButton={(
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
      )}
      />
    </CardContent>
  );
}

export default Signup;
