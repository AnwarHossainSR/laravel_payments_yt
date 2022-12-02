import { Button, Stack } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { get } from '../api/CallAPi';
import Card from '../components/Card';

const Plan = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    get('/logout');
    navigate('/');
  };

  useEffect(() => {
    const getData = async () => {
      const res = await get('/plans');
      console.log(res);
    };

    getData();
  }, []);

  return (
    <Stack>
      <Stack display={'flex'} justifyContent='center' flexDirection={'row'} mt={3}>
        <Button onClick={() => navigate('/plan/dashboard')} sx={{ width: 100 }}>
          Dashboard
        </Button>
        <Button onClick={handleLogout} sx={{ width: 100 }}>
          Logout
        </Button>
      </Stack>
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
        <Card buttonColor='#4615b2' />
      </Stack>
    </Stack>
  );
};

export default Plan;
