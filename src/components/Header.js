// ./src/components/Header.js

import React from 'react';
import { Typography, Button } from '@mui/material';
import { FaBeer } from 'react-icons/fa';

function Header() {
  return (
    <header style={{ textAlign: 'center', marginBottom: '20px' }}>
      <Typography variant="h3" component="h1" align="center" color="primary">
        Simple React Application with MUI
      </Typography>
      <Button variant="contained" color="primary" startIcon={<FaBeer />} style={{ marginTop: '20px' }}>
        Cheers!
      </Button>
    </header>
  );
}

export default Header;
