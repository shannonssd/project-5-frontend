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
  List, ListItem, ListItemIcon, ListItemText, Divider, Drawer, Button,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import InterestsIcon from '@mui/icons-material/Interests';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import CampaignIcon from '@mui/icons-material/Campaign';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

/*
 * ========================================================
 * ========================================================
 *
 *                Component for nav drawer
 *
 * ========================================================
 * ========================================================
 */
const history = useHistory();

function FullList() {
  const actions = [
    { icon: <ChatIcon />, name: 'Chat', link: "/chat-all" },
    { icon: <LocalGroceryStoreIcon />, name: 'Hand Me Down', link: "/hmd-list" },
    { icon: <InterestsIcon />, name: 'Interest Group', link: "/interest-group-list" },
    { icon: <CampaignIcon />, name: 'Notices' },
  ];
  return (
    <>
      <List>
        {actions.map((action) => (
          <ListItem
            button
            key={action.name}
            onClick={() => {
              history.push(action.link); }}
          >
            <ListItemIcon>{action.icon}</ListItemIcon>
            <ListItemText>{action.name}</ListItemText>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem
          button
          key="logout"
          onClick={(e) => {
            e.preventDefault();
            history.push("/logout");
          }}
        >
          <ListItemIcon><LogoutRoundedIcon /></ListItemIcon>
          <ListItemText>Log Out</ListItemText>
        </ListItem>

      </List>
    </>
  );
}

function NavDrawer() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <Button onClick={handleOpen}><MoreVertOutlinedIcon /></Button>
      <Drawer
        anchor="right"
        open={open}
        onClose={handleClose}
      >
        <FullList />
      </Drawer>
    </div>
  );
}

export default NavDrawer;
