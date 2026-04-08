import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            sx={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#fafafa' }}
          >
            Nillion Operations
          </Button>
        </Box>
        <Button
          color="inherit"
          component={RouterLink}
          to="/compute"
          sx={{ fontSize: '1rem', fontWeight: 'medium', color: '#fafafa' }}
        >
          Blind Computation Demo
        </Button>
        <Button
          color="inherit"
          component={RouterLink}
          to="/blind-inference"
          sx={{ fontSize: '1rem', fontWeight: 'medium', color: '#fafafa' }}
        >
          Blind Inference
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
