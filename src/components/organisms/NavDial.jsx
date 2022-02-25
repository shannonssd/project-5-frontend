import React from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import { SpeedDial, SpeedDialAction } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import InterestsIcon from '@mui/icons-material/Interests';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import CampaignIcon from '@mui/icons-material/Campaign';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const actions = [
  { icon: <ChatIcon />, name: 'Chat', link: "/chat-all" },
  { icon: <LocalGroceryStoreIcon />, name: 'Hand Me Down', link: "/hmd-list" },
  { icon: <InterestsIcon />, name: 'Interest Group', link: "/interest-group-list" },
  { icon: <CampaignIcon />, name: 'Notices' },
];

export default function NavSpeedDial() {
  const history = useHistory();

  return (
    <Box sx={{
      height: '50px', transform: 'translateZ(0px)', flexGrow: 1,
    }}
    >
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', right: 10, top: 10 }}
        icon={<MoreVertOutlinedIcon />}
        direction="down"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={(e) => {
              e.preventDefault();
              history.push(action.link);
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
