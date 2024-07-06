// import React, { useState } from 'react';
// import { Container, TextField, Button, Typography, Box, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     role: ''  // Add role to the form data state
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/register', formData);
//       console.log(response.data);
//       // Display an alert message upon successful registration
//       if (response.status === 201) {
//         alert('User registered successfully');
//         navigate('/login');  // Redirect to login page
//       }
//     } catch (error) {
//       console.error(error);
//       // Optionally, you can handle errors and display a message
//       alert('Error registering user');
//     }
//   };

//   return (
//     <Container maxWidth="sm" className="container-background">
//       <Box className="form-container">
//         <Typography variant="h4" gutterBottom>
//           Register
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="Username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//           />
          
//           <TextField
//             label="Email"
//             name="email"
//             type="email"
//             value={formData.email}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//           />
//           <TextField
//             label="Password"
//             name="password"
//             type="password"
//             value={formData.password}
//             onChange={handleChange}
//             fullWidth
//             margin="normal"
//           />
//           <FormControl fullWidth margin="normal">
//             <InputLabel id="role-select-label">Role</InputLabel>
//             <Select
//               labelId="role-select-label"
//               id="role-select"
//               name="role"
//               value={formData.role}
//               onChange={handleChange}
//               label="Role"
//             >
//               <MenuItem value={'voter'}>Voter</MenuItem>
//               <MenuItem value={'candidate'}>Candidate</MenuItem>
//             </Select>
//           </FormControl>
//           <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
//             Register
//           </Button>
//         </form>
//       </Box>
//     </Container>
//   );
// }

// export default Register;
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Define the validation schema
const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(4, 'Password must be at least 4 characters').required('Password is required'),
  role: yup.string().required('Role is required')
});

function Register() {
  const navigate = useNavigate();
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/register', data);
      console.log(response.data);
      // Display an alert message upon successful registration
      if (response.status === 201) {
        alert('User registered successfully');
        navigate('/login');  // Redirect to login page
      }
    } catch (error) {
      console.error(error);
      // Optionally, you can handle errors and display a message
      alert('Error registering user');
    }
  };

  return (
    <Container maxWidth="sm" className="container-background">
      <Box className="form-container">
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Username"
                fullWidth
                margin="normal"
                error={!!errors.username}
                helperText={errors.username?.message}
              />
            )}
          />
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
          <FormControl fullWidth margin="normal" error={!!errors.role}>
            <InputLabel id="role-select-label">Role</InputLabel>
            <Controller
              name="role"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select
                  {...field}
                  labelId="role-select-label"
                  id="role-select"
                  label="Role"
                >
                  <MenuItem value={'voter'}>Voter</MenuItem>
                  <MenuItem value={'candidate'}>Candidate</MenuItem>
                </Select>
              )}
            />
            {errors.role && <Typography color="error">{errors.role?.message}</Typography>}
          </FormControl>
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Register
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Register;
