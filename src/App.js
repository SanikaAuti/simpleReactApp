import React from 'react';
import Posts from './components/Posts';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const App = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Simple React App with Material-UI
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Posts />
      </Container>
    </div>
  );
};

export default App;
