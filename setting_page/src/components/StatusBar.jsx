import * as React from 'react';
import { Stepper, Step, StepButton, StepIndicator } from '@mui/joy';
import { Button, Box } from '@mui/material';
import Check from '@mui/icons-material/Check';
import LoginForm from './LoginForm';
import PreferencesForm from './PreferencesForm';
import ConfirmationForm from './Confirmation';

const steps = ['Login', 'Preferences', 'Confirmation'];

export default function StatusBar() {
  const [activeStep, setActiveStep] = React.useState(0); 

  const handleNext = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, steps.length - 1)); 
  };

  const handleBack = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0)); 
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <LoginForm />;
      case 1:
        return <PreferencesForm />;
      case 2:
        return <ConfirmationForm />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: "70%", padding: '20px', alignItems: "center" }}>
      <Stepper activeStep={activeStep} sx={{ marginBottom: 3 }}>
        {steps.map((step, index) => (
          <Step sx={{
            '&::after': {
              height: 2,
              borderRadius: '24px',
              backgroundColor:
                activeStep > index
                  ? 'blue'
                  : 'linear-gradient(to right, #002f61, #00507b, #006e8e, #008b98, #00a79c)'
            },
          }}>
            <StepIndicator
              variant={activeStep <= index ? 'soft' : 'solid'}
              color={activeStep < index ? 'neutral' : 'primary'}
            >
              {activeStep <= index ? index + 1 : <Check />}
            </StepIndicator>
            <StepButton onClick={() => setActiveStep(index)}>{step}</StepButton>
          </Step>
        ))}
      </Stepper>

      {renderStepContent(activeStep)}

      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
        {activeStep > 0 && (
          <Button onClick={handleBack} variant="outlined" color="primary">
            Back
          </Button>
        )}
        {activeStep < steps.length - 1 ? (
          <Button onClick={handleNext} variant="contained" color="primary">
            Next
          </Button>
        ) : (
          <Button variant="contained" color="primary">
            Finish
          </Button>
        )}
      </Box>
    </Box>
  );
}