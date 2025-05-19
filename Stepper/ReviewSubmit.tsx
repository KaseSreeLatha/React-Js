import React from "react";
import { Box, Typography, Paper, Divider } from "@mui/material";
import { useFormContext } from "../context/ContextAPI"; // Import context

const ReviewSubmit = () => {
  const { formData } = useFormContext();

  return (
    <Box sx={{ width: "100%", maxWidth: 600, margin: "auto", mt: 4, padding: 3, }}>
      <Paper
        sx={{
          padding: 3,
          boxShadow: 6,
          borderRadius: 3,
          backgroundColor: "#FFF6FA",
          border: "1px solid #e0e0e0", // subtle border around the Paper
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#407EC9", // Dark Blue for the title (gives a professional and strong feel)
            mb: 3,
            textAlign: "center",
            textTransform: "uppercase", // Added uppercase styling for emphasis
          }}
        >
          Review & Submit
        </Typography>

        <Divider sx={{ mb: 3, backgroundColor: "#d6d6d6" }} /> {/* Subtle divider color */}

        <Box sx={{ mb: 2 }}>
          <Typography variant="body1" sx={{  color: "#3D3D3D" }}>
            <strong>First Name:</strong> 
            <span style={{ color: "#000000" }}> Anu HA</span> {/* Darker color for data */}
          </Typography>
          <Typography variant="body1" sx={{ color: "#3D3D3D" }}>
            <strong>Last Name:</strong> 
            <span style={{ color: "#000000" }}> Anu HA</span>
          </Typography>
          <Typography variant="body1" sx={{ color: "#3D3D3D" }}>
            <strong>Email:</strong> 
            <span style={{ color: "#000000" }}> anua.19.beec@acharya.ac.in</span>
          </Typography>
          <Typography variant="body1" sx={{ color: "#3D3D3D" }}>
            <strong>Address:</strong> 
            <span style={{ color: "#000000" }}> Paypal_Integration</span>
          </Typography>
        </Box>

        <Divider sx={{ mb: 3, backgroundColor: "#d6d6d6" }} /> {/* Another divider for separation */}

        <Box>
          <Typography variant="body1" sx={{ color: "#3D3D3D" }}>
            <strong>Appointment Date:</strong> 
            <span style={{ color: "#000000" }}> 06 Mar 2025</span>
          </Typography>
          <Typography variant="body1" sx={{ color: "#3D3D3D" }}>
            <strong>Selected Time:</strong> 
            <span style={{ color: "#000000" }}> 12:00 PM</span>
          </Typography>
        </Box>

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              color: "#EB80A8", // Green color for confirmation text
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            All Details are confirmed!
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default ReviewSubmit;
