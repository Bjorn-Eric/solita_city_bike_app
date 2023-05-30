import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          City Bike App
        </Typography>
        <Button component={RouterLink} to="/" color="inherit">Home</Button>
        <Button component={RouterLink} to="/stations" color="inherit">Stations</Button>
        <Button component={RouterLink} to="/journeys" color="inherit">journeys</Button>
        <Button component={RouterLink} to="/about" color="inherit">About</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
