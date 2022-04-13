/*
 * ========================================================
 * ========================================================
 *
 *                       Imports
 *
 * ========================================================
 * ========================================================
 */
import React, { useState } from 'react';
import {
  Card, CardContent, Typography, Button, TextField, FormControl, CardActions,
} from '@mui/material';
import PhotoIcon from '@mui/icons-material/Photo';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { useAuthContext } from "../others/store";

/*
 * ========================================================
 * ========================================================
 *
 *                Component for AddInterestGroup
 *
 * ========================================================
 * ========================================================
 */
function AddInterestGroup() {
  const { state } = useAuthContext();
  const { name, userId, district } = state;
  const [groupName, setGroupName] = useState(null);
  const [description, setDescription] = useState(null);
  const [photo, setPhoto] = useState();
  const [photoCaption, setPhotoCaption] = useState('No files uploaded');
  const history = useHistory();

  const groupNameHandler = (e) => {
    setGroupName(e.target.value);
  };

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
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
    <Card sx={{
      width: '230px', padding: '20px', mx: "auto", borderRadius: "20px", mt: "20px",
    }}
    >
      <CardContent>
        <FormControl fullWidth>
          <TextField
            sx={{ my: 1 }}
            label="Group Name"
            variant="outlined"
            onChange={groupNameHandler}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            sx={{ my: 1 }}
            label="Group Description"
            variant="outlined"
            onChange={descriptionHandler}
          />
        </FormControl>
        <FormControl>
          <div>
            <label htmlFor="item-photo">
              <AddAPhotoIcon color="primary" />
              <input type="file" id="item-photo" name="item-photo" className="file" onChange={imageHandler} accept="image/*" />
              <br />
              <Typography variant="caption">{photoCaption}</Typography>
            </label>
          </div>

        </FormControl>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={handleSubmit} sx={{ mx: "auto" }}>Submit</Button>
      </CardActions>
    </Card>
  );
}

export default AddInterestGroup;
