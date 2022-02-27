/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import {
  Grid, Typography, Stack,
} from '@mui/material';
import BackIcon from "../molecules/BackIcon";
import { useAuthContext } from "../others/store";
import UserItemCard from '../organisms/UserItemCard';

function HandMeDownUserPage({ setChosenItem }) {
  const { state } = useAuthContext();
  const { userId } = state;
  console.log('<== auth context ==>', useAuthContext());
  const [userItems, setUserItems] = useState([]);
  const [likedItems, setLikedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    async function loadUserItems() {
      const query = new URLSearchParams();
      query.append('userId', userId);

      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/hand-me-downs/show-users-items?${query.toString()}`);
      const { itemsArr, likedHandMeDowns } = res.data;
      console.log('<== res data user items ==>', res.data);
      setUserItems(itemsArr);
      setLikedItems(likedHandMeDowns);
      setLoading(false);
    }
    loadUserItems();
  }, []);

  const userItemCards = userItems.map((item) => (
    <Grid item xs={6}>
      <UserItemCard
        key={item._id}
        item={item}
        setChosenItem={setChosenItem}
      />
    </Grid>
  ));

  return (
    <div className="mobile">
      <Stack
        direction="row"
        justifyContent="start"
        alignItems="center"
      >
        <BackIcon onClick={() => history.push('/hmd-list')} />
        <Typography variant="h1">
          My Collection
        </Typography>
      </Stack>
      <Typography variant="h2">
        My Items
      </Typography>
      <div className="ig-card-container">
        {userItemCards}
      </div>

    </div>
  );
}

export default HandMeDownUserPage;
