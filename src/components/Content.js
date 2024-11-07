// ./src/components/Content.js

import React from 'react';
import { motion } from 'framer-motion';

function Content(props) {
  return (
    <motion.div
      style={{ textAlign: 'center', padding: '20px' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        stroke={props.color}
      >
        <motion.circle cx="50" cy="50" r="40" strokeWidth="4" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 3 }} />
      </svg>
      <p>{props.text}</p>
    </motion.div>
  );
}

export default Content;
