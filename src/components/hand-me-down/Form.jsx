import React, { useState } from 'react';
import {
  Card, CardContent, Typography, Button, TextField, FormControl, Input,
} from '@mui/material';
import axios from 'axios';

function Form() {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [condition, setCondition] = useState(null);
  const [file, setFile] = useState();

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const conditionHandler = (e) => {
    setCondition(e.target.value);
  };

  const imageHandler = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', name);
    data.append('description', description);
    data.append('condition', condition);
    data.append('file', file);
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
              label="Name"
              variant="outlined"
              onChange={nameHandler}
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
            <label htmlFor={file}>
              Upload Image
              <input type="file" id={file} name="file" onChange={imageHandler} accept="image/*" />
            </label>
          </FormControl>
        </CardContent>
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </Card>
    </div>
  );
}

export default Form;
