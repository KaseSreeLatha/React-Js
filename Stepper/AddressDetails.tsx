import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, TextField } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import TimeSlotPicker from "./TimeSlotPicker"; // Import TimeSlotPicker
import { useFormContext } from "../context/ContextAPI"; // Import context

const AddressDetails = () => {
  const { formData, setFormData } = useFormContext();
  const [address, setAddress] = useState(formData.address || "");
  const [selectedDate, setSelectedDate] = useState(formData.appointmentDate || dayjs());
  const [selectedTime, setSelectedTime] = useState(formData.selectedTime || null);

  useEffect(() => {
    // Update formData when address, date, or time changes
    setFormData((prevData) => ({
      ...prevData,
      address: address,
      appointmentDate: selectedDate,
      selectedTime: selectedTime,
    }));
  }, [address, selectedDate, selectedTime, setFormData]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Card sx={{ maxWidth: 600, mx: "auto", mt: 4, boxShadow: 3, borderRadius: 3, p: 3 }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}>
            Address & Appointment Details
          </Typography>

          {/* Address Input */}
          <TextField
            label="Enter Your Address"
            fullWidth
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            sx={{ mb: 2 }}
          />

          {/* Date Picker */}
          <DatePicker
            label="Choose Date"
            value={selectedDate}
            onChange={setSelectedDate}
            sx={{ width: "100%", mb: 2 }}
            slotProps={{ textField: { fullWidth: true, variant: "outlined" } }}
          />

          {/* Time Slot Picker Component */}
          <TimeSlotPicker selectedDate={selectedDate} onTimeSelect={setSelectedTime} />

          {/* Confirmation */}
          {selectedTime && (
            <Box sx={{ mt: 3, textAlign: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "green" }}>
                Appointment Confirmed!
              </Typography>
              <Typography variant="body1">
                📍 {address || "No address provided"} <br />
                📅 {selectedDate.format("DD MMM YYYY")} | ⏰ {selectedTime}
              </Typography>
            </Box>
          )}
        </CardContent>
      </Card>
    </LocalizationProvider>
  );
};

export default AddressDetails;
