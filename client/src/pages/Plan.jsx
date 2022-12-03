import { Button, Stack } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { get } from '../api/CallAPi';
import Card from '../components/Card';

const Plan = () => {
  const [plans, setPlans] = useState([]);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    get('/logout');
    navigate('/');
  };

  useEffect(() => {
    axios.defaults.headers.common = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    };
    const getData = async () => {
      const res = await get('/plans');
      if (res.status === 200) setPlans(res.data.data);
    };
    getData();
  }, []);

  return (
    <Stack>
      <Stack
        display={'flex'}
        justifyContent='center'
        flexDirection={'row'}
        mt={3}
      >
        <Button
          onClick={() => navigate('/plans/dashboard')}
          sx={{ width: 100 }}
        >
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
        {plans.map((plan, index) => (
          <Card key={plan.id} plan={plan} index={index} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Plan;
