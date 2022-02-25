import React, { useState } from 'react';
import {
  Card, CardContent, Typography, Button, TextField, FormControl, Input,
} from '@mui/material';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useAuthContext } from "../others/store";

function AddInterestGroup() {
  const { state } = useAuthContext();
  const { name, userId, district } = state;
  const [groupName, setGroupName] = useState(null);
  const [description, setDescription] = useState(null);
  const [photo, setPhoto] = useState();
  const history = useHistory();

  const groupNameHandler = (e) => {
    setGroupName(e.target.value);
  };

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const imageHandler = (e) => {
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', groupName);
    data.append('description', description);
    data.append('creatorName', name);
    data.append('district', district);
    data.append('userId', userId);
    data.append('photo', photo);
    data.append('userId', localStorage.getItem('userId'));
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/interest-group/add-group`, data);
    history.push('/interest-group-list');
  };

  return (
    <div>
      <Card sx={{ width: '230px', padding: '20px' }}>
        <CardContent>
          <FormControl>
            <TextField
              fullWidth
              sx={{ my: 1 }}
              label="Group Name"
              variant="outlined"
              onChange={groupNameHandler}
            />
          </FormControl>
          <FormControl>
            <TextField
              fullWidth
              sx={{ my: 1 }}
              label="Group Description"
              variant="outlined"
              onChange={descriptionHandler}
            />
          </FormControl>
          <FormControl>
            <label htmlFor={photo}>
              Upload A Banner Photo
              <input type="file" id={photo} name="photo" onChange={imageHandler} accept="image/*" />
            </label>
          </FormControl>
        </CardContent>
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
      </Card>
    </div>
  );
}

export default AddInterestGroup;
