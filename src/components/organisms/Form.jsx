import React, { useState } from 'react';
import {
  Card, CardContent, CardActions, Button, TextField, FormControl, Box, IconButton, Stack,
} from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import axios from 'axios';
import { flexbox } from '@mui/system';

function Form() {
  const [itemName, setItemName] = useState(null);
  const [description, setDescription] = useState(null);
  const [condition, setCondition] = useState(null);
  const [photo, setPhoto] = useState();

  const itemNameHandler = (e) => {
    setItemName(e.target.value);
  };

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const conditionHandler = (e) => {
    setCondition(e.target.value);
  };

  const imageHandler = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('itemName', itemName);
    data.append('description', description);
    data.append('condition', condition);
    data.append('photo', photo);
    data.append('userId', localStorage.getItem('userId'));
    const result = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/hand-me-downs/add-item`, data);
    console.log('<=== axios result ===>', result.data);
  };

  return (
    <Card sx={{
      width: '230px', padding: '20px', mx: "auto",
    }}
    >
      <CardContent>
        <FormControl fullWidth sx={{ my: 1 }}>
          <TextField
            label="Item Name"
            variant="outlined"
            onChange={itemNameHandler}
          />
        </FormControl>
        <FormControl fullWidth sx={{ my: 1 }}>
          <TextField
            label="Description"
            variant="outlined"
            onChange={descriptionHandler}
          />
        </FormControl>
        <FormControl fullWidth sx={{ my: 1 }}>
          <TextField
            label="Condition"
            variant="outlined"
            onChange={conditionHandler}
          />
        </FormControl>
        <FormControl>
          <label htmlFor="item-photo">
            <input style={{ display: 'none' }} type="file" id="item-photo" name="item-photo" onChange={imageHandler} accept="image/*" />

            <IconButton aria-label="add photo" component="span"><AddAPhotoIcon /></IconButton>
          </label>
        </FormControl>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button sx={{ width: "198px" }} variant="contained" onClick={handleSubmit}>Submit</Button>
      </CardActions>
    </Card>

  );
}

export default Form;
