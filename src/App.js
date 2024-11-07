import React from 'react';
import { Container, Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <Container maxWidth="md" style={{ backgroundColor: '#fafafa', padding: '40px', borderRadius: '8px' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <Content color="blue" text="This is my first React Application!" />
        <Content color="green" text="With animated transitions!" />
        <Content color="purple" text="Using MUI & Framer Motion" />
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ marginTop: '20px' }}
          onClick={() => alert('Button clicked!')}
        >
          Click Me
        </Button>
      </motion.div>
      <Footer />
    </Container>
  );
}

export default App;
