// ./src/App.js

import React, { useState, useEffect } from 'react';
import { Container, Button, Typography, CssBaseline, ThemeProvider, createTheme, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [users, setUsers] = useState([]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" style={{ padding: '40px', borderRadius: '8px' }}>
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
            onClick={toggleTheme}
          >
            Toggle Theme
          </Button>
        </motion.div>

        <Grid container spacing={2} justifyContent="center" style={{ padding: '20px' }}>
          <Grid item xs={12} sm={6} md={4}>
            <Button variant="contained" color="primary">
              Click Me
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Button variant="outlined" color="secondary">
              Another Button
            </Button>
          </Grid>
        </Grid>

        <Typography variant="h4" align="center">
          User List
        </Typography>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <Typography variant="body1">{user.name}</Typography>
            </li>
          ))}
        </ul>

        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
