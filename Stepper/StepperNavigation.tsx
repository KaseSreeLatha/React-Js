import React from "react";
import { Stepper, Step, StepLabel } from "@mui/material";

const steps = ["Personal Info", "Address Details", "Review & Submit"];

const StepperNavigation = ({ activeStep }) => {
  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};

export default StepperNavigation;
