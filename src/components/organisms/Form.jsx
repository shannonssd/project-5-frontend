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
  Card, CardContent, CardActions, Button, TextField, FormControl, Typography,
} from '@mui/material';
import { useHistory } from 'react-router-dom';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import axios from 'axios';

/*
 * ========================================================
 * ========================================================
 *
 *                Component for Form
 *
 * ========================================================
 * ========================================================
 */
function Form() {
  const [itemName, setItemName] = useState(null);
  const [description, setDescription] = useState(null);
  const [condition, setCondition] = useState(null);
  const [photo, setPhoto] = useState();
  const [photoCaption, setPhotoCaption] = useState('No files uploaded');

  const history = useHistory();

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
    data.append('itemName', itemName);
    data.append('description', description);
    data.append('condition', condition);
    data.append('photo', photo);
    data.append('userId', localStorage.getItem('userId'));
    const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/hand-me-downs/add-item`, data);
    if (res.data.message) {
      history.push('/hmd-user');
    }
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
      <CardActions sx={{ display: "flex", justifyContent: "center" }}>
        <Button sx={{ width: "198px" }} variant="contained" onClick={handleSubmit}>Submit</Button>
      </CardActions>
    </Card>

  );
}

export default Form;
