import {
  Grid, Stack, Typography, Avatar,
} from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ChatIcon from '@mui/icons-material/Chat';
import InterestsIcon from '@mui/icons-material/Interests';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import CampaignIcon from '@mui/icons-material/Campaign';
import MenuCard from "../molecules/MenuCard";
import { useAuthContext } from "../others/store";
import mainTheme from '../../theme';
import NavMenu from "../organisms/NavMenu";

export default function HomePage() {
  const history = useHistory();
  const { state } = useAuthContext();
  const {
    name, userId, district, photo,
  } = state;
  console.log('<== photo ==>', photo);
  const goChat = () => {
    history.push('/chat-list');
  };

  const goHandDown = () => {
    history.push('/hmd-list');
  };

  const goInterestGroup = () => {
    history.push('/interest-group-list');
  };

  const signOut = () => {
    history.push('/');
  };

  return (
    <div className="mobile">
      <NavMenu />
      <Stack
        direction="row-reverse"
        alignItems="center"
        justifyContent="space-between"
      >
        <Avatar src={photo} alt={name} sx={{ width: 50, height: 50, mr: 2 }} />
        <Stack
          direction="column"
          justifyContent="start"
          spacing={1}
          marginTop="20px"
        >
          <Typography variant="h2" sx={{ color: mainTheme.palette.primary.main }}>
            Hello
            {' '}
            {name}
          </Typography>
          <Typography variant="h1" sx={{ color: mainTheme.palette.primary.main }}>
            {district}
            <br />
            Community
            <br />
            Club
          </Typography>
          <br />
        </Stack>
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <MenuCard icon={<ChatIcon />} header="Chat" onClick={goChat} />
        </Grid>
        <Grid item xs={6}>
          <MenuCard icon={<InterestsIcon />} header="Interest Groups" onClick={goInterestGroup} />
        </Grid>
        <Grid item xs={6}>
          <MenuCard icon={<LocalGroceryStoreIcon />} header="Hand Me Down" onClick={goHandDown} />
        </Grid>
        <Grid item xs={6}>
          <MenuCard icon={<CampaignIcon />} header="Notices" />
        </Grid>
      </Grid>
    </div>
  );
}
