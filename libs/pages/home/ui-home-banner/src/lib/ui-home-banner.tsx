import React from 'react';
import { Box, Typography, Button, Container ,styled } from '@mui/material';

const HomeBanner = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  width: theme.spacing(4, 3),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '400px',
  backgroundColor: '#f5f5f5',
  backgroundImage: 'url(https://via.placeholder.com/1500)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  color: 'white',
}));

export function UiHomeBanner() {
  return (
    <HomeBanner>
      <Container maxWidth="md" sx={{ textAlign: 'center', zIndex: 2 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    The gift of a man is his goodwill. Take care of gift
                </Typography>
                <Typography variant="h6" component="p" gutterBottom>
                    GIFT SHOP
                </Typography>
                <Button variant="contained" color="primary" size="large" href='/user'>
                    Shop Now
                </Button>
            </Container>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}
            />
    </HomeBanner>
  );
}

export default UiHomeBanner;
