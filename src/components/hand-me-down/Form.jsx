import React, { useState } from 'react';
import {
  Card, CardContent, CardMedia, Typography, Button, TextField, FormControl,
} from '@mui/material';
import axios from 'axios';

const BACKEND_URL = 'http://localhost:3004';

function Form() {
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [condition, setCondition] = useState(null);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const conditionHandler = (e) => {
    setCondition(e.target.value);
  };

  const handleSubmit = async (e) => {
    const item = {
      name,
      description,
      condition,
    };
    const result = await axios.post(`${BACKEND_URL}/users/add-item`, item);
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
        </CardContent>
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </Card>
    </div>
  );
}

export default Form;
