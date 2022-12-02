import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { post } from '../api/CallAPi';

const Login = () => {
  const navigate = useNavigate();
  const emailRef = React.useRef();
  const passwordRef = React.useRef();

  const handleSubmit = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const res = await post('/login', { email, password });
    if (res.data.status === true) {
      localStorage.setItem('token', res.data.token);
      navigate('/plans');
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/plans');
    }
  }, [token]);

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Box noValidate sx={{ mt: 1 }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            //autoComplete='email'
            autoFocus
            inputRef={emailRef}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            inputRef={passwordRef}
            //autoComplete='current-password'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
