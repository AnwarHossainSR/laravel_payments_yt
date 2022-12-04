import { Stack } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Cancel from './pages/Cancel';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Plan from './pages/Plan';
import Protected from './pages/Protected';
import Success from './pages/Success';
const App = () => {
  return (
    <Stack>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='plans/*' element={<Protected />}>
          <Route index element={<Plan />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='payment/success' element={<Success />} />
          <Route path='cancel' element={<Cancel />} />
        </Route>
      </Routes>
    </Stack>
  );
};

export default App;
