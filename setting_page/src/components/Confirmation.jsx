import React from 'react';
import { Box, Typography } from '@mui/material';
import { useFormData } from '../context/ContextAPI';

const Confirmation = () => {
  const { formData } = useFormData();

  return (
    <Box>
      <Typography variant="h5">Step 3: Confirmation</Typography>
      <Typography>Name: {formData.name}</Typography>
      <Typography>Password: {formData.password}</Typography>
      <Typography>Preference: {formData.preference}</Typography>
    </Box>
  );
};

export default Confirmation;