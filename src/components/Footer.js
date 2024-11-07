// ./src/components/Footer.js

import React from 'react';
import { Typography } from '@mui/material';

function Footer() {
  return (
    <footer style={{ textAlign: 'center', marginTop: '20px' }}>
      <Typography variant="body2" color="textSecondary">
        Created by Me, of course.
      </Typography>
    </footer>
  );
}

export default Footer;
