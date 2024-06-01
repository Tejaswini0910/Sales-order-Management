
// src/pages/Login.js
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Box, Button, Input, Stack } from '@chakra-ui/react';

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <Box maxW="sm" mx="auto" mt="10">
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Login;
