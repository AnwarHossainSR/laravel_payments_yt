import { Button, Stack } from '@mui/material';
import * as React from 'react';

const Card = ({ buttonColor }) => {
  //Create a pricing card by material ui 5
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Stack
        sx={{
          width: 220,
          bgcolor: 'background.paper',
          boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',

          borderRadius: 10,
          p: 4,
          textAlign: 'center',
        }}
      >
        <h2>Personal</h2>
        <p>Get the party started</p>
        <h2>$9.99</h2>
        <p>per month</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          voluptatum.
        </p>
        <Button
          variant='contained'
          sx={{ background: buttonColor, borderRadius: 10 }}
        >
          Get Started
        </Button>
      </Stack>
    </Stack>
  );
};

export default Card;
