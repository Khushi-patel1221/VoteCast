
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Define the validation schema
const schema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required')
});

function Login() {
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/login', data);
      console.log(response.data);
      // Assuming the response contains a user object with an id
      if (response.data) {
        localStorage.setItem('userId', response.data.userId);
        localStorage.setItem('isCandidate', response.data.isCandidate);
        if (response.data.isCandidate) {
          navigate('/candidate');
        } else {
          navigate('/voting');
        }
      } else {
        console.error('Login failed');
        // Handle login failure (e.g., show an error message)
        alert('Login failed. Please check your email and password.');
      }
    } catch (error) {
      console.error(error);
      // Handle login error (e.g., show an error message)
      alert('Error logging in. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm" className="container-background">
      <Box className="form-container">
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Email"
                type="email"
                fullWidth
                margin="normal"
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Password"
                type="password"
                fullWidth
                margin="normal"
                error={!!errors.password}
                helperText={errors.password?.message}
              />
            )}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Login;
