import React from "react";
import { TextField, Box, Typography, Paper } from "@mui/material";
import { useFormContext } from "../context/ContextAPI";

const PersonalInfo = () => {
  const { formData, setFormData } = useFormContext();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 600, margin: "auto", mt: 4, padding: 3 }}>
      <Paper
        sx={{
          padding: 3,
          boxShadow: 6,
          borderRadius: 3,
          backgroundColor: "#FFFFFF",
          border: "1px solid #e0e0e0",
        }}
      >
        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#021D49", // Dark color for the section title
            textAlign: "center",
            mb: 3,
           // Uppercase styling for emphasis
          }}
        >
          User Information
        </Typography>

        {/* First Name Input */}
        <TextField
          fullWidth
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          sx={{
            mt: 2,
            backgroundColor: "#f9fafb", // Light background for better readability
            borderRadius: 1,
            '& .MuiInputBase-root': {
              borderRadius: '8px', // Rounded corners for the input field
            },
          }}
        />

        {/* Last Name Input */}
        <TextField
          fullWidth
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          sx={{
            mt: 2,
            backgroundColor: "#f9fafb",
            borderRadius: 1,
            '& .MuiInputBase-root': {
              borderRadius: '8px',
            },
          }}
        />

        {/* Email Input */}
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          sx={{
            mt: 2,
            backgroundColor: "#f9fafb",
            borderRadius: 1,
            '& .MuiInputBase-root': {
              borderRadius: '8px',
            },
          }}
        />
      </Paper>
    </Box>
  );
};

export default PersonalInfo;
