import React from 'react';
import { Radio, FormControlLabel, RadioGroup, Box, Typography } from '@mui/material';
import { useFormData } from '../context/ContextAPI';

const PreferencesForm = () => {
  const { formData, updateFormData } = useFormData(); 

  const handleChange = (e) => {
    updateFormData('preference', e.target.value); 
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant='h5'>Step:2 Preferences</Typography>
      <RadioGroup
        name="preferences"
        value={formData.preference}
        onChange={handleChange}
      >
        <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
        <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
      </RadioGroup>
    </Box>
  );
};

export default PreferencesForm;