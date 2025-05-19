import React from 'react';
import { TextField, Box } from '@mui/material';
import { useFormData } from '../context/ContextAPI'; 

const LoginForm = () => {
  const { formData, updateFormData } = useFormData(); 

  const handleChange = (e) => {
    updateFormData(e.target.name, e.target.value); 
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        name="name"
        value={formData.name} 
        onChange={handleChange} 
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
    </Box>
  );
};

export default LoginForm;
