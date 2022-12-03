import { Button, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Success = () => {
  const navigate = useNavigate();
  return (
    <Stack justifyContent={'center'} alignItems={'center'} height='100vh'>
      <Typography variant='h4' color={'success'}>
        Success
      </Typography>
      <p>
        We have received your payment. You can now access all the features in
        our app.
      </p>
      <Button onClick={() => navigate('/plans/dashboard')} my={3}>
        Dashboard
      </Button>
    </Stack>
  );
};

export default Success;
