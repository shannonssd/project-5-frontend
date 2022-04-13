/* eslint-disable no-underscore-dangle */
/*
 * ========================================================
 * ========================================================
 *
 *                       Imports
 *
 * ========================================================
 * ========================================================
 */
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import {
  Grid, Typography, Stack,
} from '@mui/material';
import BackIcon from "../molecules/BackIcon";
import { useAuthContext } from "../others/store";
import UserItemCard from '../organisms/UserItemCard';
import BottomBar from '../molecules/BottomBar';
import AddIcon from '../molecules/AddIcon';
import NavMenu from "../organisms/NavMenu";

/*
 * ========================================================
 * ========================================================
 *
 *             Component for HandMeDownUserPage
 *
 * ========================================================
 * ========================================================
 */
function HandMeDownUserPage({ setChosenItem }) {
  const { state } = useAuthContext();
  const { userId } = state;
  const [loading, setLoading] = useState(true);
  const [userItems, setUserItems] = useState(null);
  const history = useHistory();

  useEffect(() => {
    async function loadUserItems() {
      const query = new URLSearchParams();
      query.append('userId', userId);

      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/hand-me-downs/show-users-items?${query.toString()}`);
      const { itemsArr } = res.data;
      setUserItems(itemsArr);
      setLoading(false);
    }
    loadUserItems();
  }, []);

  const addItem = () => {
    history.push('/hmd-add');
  };

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
      {userItems ? (
        <Typography variant="h2">
          My Items
        </Typography>
      ) : (
        <Typography variant="h2">
          You have no listed items, add an item.
        </Typography>
      )}
      <Grid
        container
        spacing={2}
        sx={{
          height: "500px", overflow: "scroll", mt: "10px", p: "3px",
        }}
      >
        {!loading
        && userItems.map((item) => (
          <Grid item xs={6}>
            <UserItemCard
              key={item._id}
              item={item}
              setChosenItem={setChosenItem}
            />
          </Grid>
        ))}
      </Grid>
      <BottomBar>
        <NavMenu />
        <AddIcon onClick={addItem} />
      </BottomBar>
    </div>
  );
}

export default HandMeDownUserPage;
