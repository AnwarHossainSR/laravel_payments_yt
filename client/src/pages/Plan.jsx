import { Stack } from '@mui/material';
import Card from '../components/Card';

const Plan = () => {
  //Create a pricing card by material ui 5
  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
      }}
    >
      <Card buttonColor='#9c27b0' />
      <Card buttonColor='#ff9100' />
      <Card buttonColor='#4615b2'/>
    </Stack>
  );
};

export default Plan;
