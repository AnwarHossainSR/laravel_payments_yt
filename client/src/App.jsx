import { Stack } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Plan from './pages/Plan';
import Protected from './pages/Protected';
const App = () => {
  return (
    <Stack>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='plans/*' element={<Protected />}>
          <Route index element={<Plan />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </Stack>
  );
};

export default App;
