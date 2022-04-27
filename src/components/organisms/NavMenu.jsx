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
import { useHistory } from 'react-router-dom';
import {
  Button, Menu, MenuItem, Divider, Stack, Typography,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import InterestsIcon from '@mui/icons-material/Interests';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import CampaignIcon from '@mui/icons-material/Campaign';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { logout, useAuthContext } from "../others/store";

/*
 * ========================================================
 * ========================================================
 *
 *                Component for NavOptions
 *
 * ========================================================
 * ========================================================
 */
function NavOptions() {
  const history = useHistory();
  const { dispatch } = useAuthContext();
  const actions = [
    { icon: <ChatIcon />, name: 'Chat', link: "/chat-list" },
    { icon: <LocalGroceryStoreIcon />, name: 'Hand Me Down', link: "/hmd-list" },
    { icon: <InterestsIcon />, name: 'Interest Group', link: "/interest-group-list" },
    { icon: <CampaignIcon />, name: 'Notices' },
  ];

  const handleLogout = (e) => {
    e.preventDefault();
    logout(dispatch);
    history.push('/');
  };

  return (
    <>
      {actions.map((action) => (
        <MenuItem
          key={action.name}
          onClick={() => {
            history.push(action.link); }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
          >
            {action.icon}
            <Typography variant="body1">
              {action.name}
            </Typography>
          </Stack>
        </MenuItem>
      ))}
      <Divider />
      <MenuItem
        key="logout"
        onClick={handleLogout}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
        >
          <LogoutRoundedIcon />
          {' '}
          <Typography variant="body1">
            Log Out
          </Typography>
        </Stack>
      </MenuItem>
    </>
  );
}

export default function NavMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertOutlinedIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <NavOptions />
      </Menu>
    </div>
  );
}
