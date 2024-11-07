import React from 'react';
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="h5" align="center" color="textSecondary" style={{ background: 'linear-gradient(to right, #ff7e5f, #feb47b)', padding: '10px' }}>
          Created by Me, of course.
        </Typography>
      </motion.div>
    </footer>
  );
}

export default Footer;
