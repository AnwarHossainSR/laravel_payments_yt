import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { get } from '../api/CallAPi';
const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    get('/logout');
    navigate('/');
  };
console.log(user);
  return (
    <Stack width='100vw' height='100vh' direction='row' gap={2}>
      <Stack
        width={250}
        backgroundColor='#212121'
        color='#eeeeee'
        alignItems={'center'}
        py={10}
        gap={2}
      >
        <Button
          variant='contained'
          color='secondary'
          sx={{ width: '80%' }}
          onClick={() => navigate('/plans')}
        >
          Plans
        </Button>
        <Button
          variant='contained'
          color='error'
          sx={{ width: '80%' }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Stack>
      <Stack>
        <h1>Dashboard</h1>
        <Stack pl={5} py={5}>
          <h2>You have purchased our {user?.plan?.name} plan</h2>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Dashboard;
