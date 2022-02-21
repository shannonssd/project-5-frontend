import React, { useState } from "react";
import {
  Box, Tab, Tabs, Typography, Card, CardContent,
} from '@mui/material';
import Login from "../user-auth/Login";

export default function AuthView({ setView }) {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card sx={{ width: "280px", mx: "auto" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          centered
        >
          <Tab value="1" label="Log In" />
          <Tab value="2" label="Sign Up" />
        </Tabs>
      </Box>

      {value === "1"
      && (
      <Login setView={setView} />
      )}

      {value === "2"
      && (
      <CardContent>
        <Typography variant="h1"> Sign Up </Typography>
      </CardContent>
      )}

    </Card>
  );
}
