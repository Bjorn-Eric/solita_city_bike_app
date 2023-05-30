import { Box, Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';

function MainLayout({ children }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Container maxWidth="lg" sx={{ marginTop: '2rem', minHeight: "100vh" }}>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
}

export default MainLayout;
