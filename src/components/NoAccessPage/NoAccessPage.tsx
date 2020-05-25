import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';

const NoAccessPage: React.FC = () => {
  return (
    <Container component="main" maxWidth="sm">
      <Typography variant="h3">
        <Box textAlign="center">
          You are not authorized to view this page.
          <Link to="/signup">Sign up</Link>, please!
        </Box>
      </Typography>
    </Container>
  );
};

export default NoAccessPage;
