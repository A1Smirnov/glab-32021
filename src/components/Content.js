import React from 'react';
import { motion } from 'framer-motion';

function Content(props) {
  return (
    <motion.p
      style={{ color: props.color, fontSize: '18px', lineHeight: '1.6', textAlign: 'center' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {props.text}
    </motion.p>
  );
}

export default Content;
