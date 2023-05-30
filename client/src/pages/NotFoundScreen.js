import { Box, Typography } from '@mui/material';
import React from 'react';

function NotFoundScreen() {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        <strong>404 - Page Not Found</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Oops! The page you are looking for does not exist.</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        <strong>Error code: 404</strong>
      </Typography>
      <Typography variant="body1" paragraph>
        Please check the URL or navigate back to the home page.
      </Typography>
    </Box>
  );
}

export default NotFoundScreen;
