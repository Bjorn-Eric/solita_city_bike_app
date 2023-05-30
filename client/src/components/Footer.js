import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flexGrow: 1,
    paddingBottom: "2.5rem",
  },
  footer: {
    backgroundColor: '#1976d2',
    color: '#ffffff',
    padding: '16px',
    textAlign: 'center',
  },
};

function Footer() {
  return (
    <Box sx={styles.pageContainer}>
      <Box component="main" sx={styles.content}>
      </Box>
      <footer style={styles.footer}>
        <Typography variant="body2" color="inherit">
          © {new Date().getFullYear()} Your App Name. All rights reserved.
        </Typography>
        <Typography variant="body2" color="inherit">
          Powered by <Link href="https://mui.com" color="inherit" target="_blank" rel="noopener noreferrer">Material-UI</Link>
        </Typography>
      </footer>
    </Box>
  );
}

export default Footer;