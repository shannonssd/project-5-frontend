import React, { useState } from 'react';
import {
  Card, CardContent, Typography, Button, TextField, FormControl, Input,
} from '@mui/material';
import axios from 'axios';

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
    const result = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/hand-me-downs/add-item`, data);
    console.log('<=== axios result ===>', result.data);
  };

  return (
    <div>
      <Card sx={{ width: '230px', padding: '20px' }}>
        <CardContent>
          <FormControl>
            <TextField
              fullWidth
              sx={{ my: 1 }}
              label="itemName"
              variant="outlined"
              onChange={itemNameHandler}
            />
          </FormControl>
          <FormControl>
            <TextField
              fullWidth
              sx={{ my: 1 }}
              label="Description"
              variant="outlined"
              onChange={descriptionHandler}
            />
          </FormControl>
          <FormControl>
            <TextField
              fullWidth
              sx={{ my: 1 }}
              label="Condition"
              variant="outlined"
              onChange={conditionHandler}
            />
          </FormControl>
          <FormControl>
            <label htmlFor={photo}>
              Upload Image
              <input type="file" id={photo} name="photo" onChange={imageHandler} accept="image/*" />
            </label>
          </FormControl>
        </CardContent>
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </Card>
    </div>
  );
}

export default Form;
