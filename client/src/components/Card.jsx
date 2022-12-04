import { Button, Stack } from '@mui/material';
import * as React from 'react';
import { post } from '../api/CallAPi';
import { colors } from '../utils/color';

const Card = ({ plan, index }) => {
  const handlePlan = async (planId) => {
    const res = await post(`/checkout/${planId}`);
    if (res.status === 200) {
      window.location.replace(res.data.url);
    }
  };
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
          width: 360,
          bgcolor: '#e3f2fd',
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',

          borderRadius: 10,
          p: 4,
          textAlign: 'center',
          height: 'auto',
        }}
      >
        <h2>{plan?.name}</h2>
        <p>Get the party started</p>
        <h2>${plan?.price}</h2>
        <p>per {plan?.interval}</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, eos
          deserunt? Sunt unde fugiat atque?
        </p>
        <Button
          variant='contained'
          sx={{ background: colors[index], borderRadius: 10, my: 2, py: 1 }}
          onClick={() => handlePlan(plan?.id)}
        >
          Get Started
        </Button>
      </Stack>
    </Stack>
  );
};

export default Card;
