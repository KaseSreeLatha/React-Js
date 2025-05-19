import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import StepperNavigation from "./StepperNavigation";
import PersonalInfo from "./PersonalInfo";
import AddressDetails from "./AddressDetails";
import ReviewSubmit from "./ReviewSubmit";
import { useFormContext } from "../context/ContextAPI";

const MultiStepForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { formData } = useFormContext();

  const handleNext = () => setActiveStep((prevStep) => prevStep + 1);
  const handleBack = () => setActiveStep((prevStep) => prevStep - 1);

  const handleSubmit = () => {
    console.log("User Details Submitted:", formData); // Logs user details to console
  };

  return (
    <Box sx={{ width: "50%", margin: "auto", mt: 5 }}>
      {/* Stepper Navigation */}
      <StepperNavigation activeStep={activeStep} />

      {/* Form Steps */}
      <Box sx={{ mt: 3 }}>
        {activeStep === 0 && <PersonalInfo />}
        {activeStep === 1 && <AddressDetails />}
        {activeStep === 2 && <ReviewSubmit />}
      </Box>

      {/* Navigation Buttons */}
      <Box sx={{ mt: 3 }}>
        <Button disabled={activeStep === 0} onClick={handleBack} color="primary">Back</Button>
        {activeStep === 2 ? (
          <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
        )}
      </Box>
    </Box>
  );
};

export default MultiStepForm;
