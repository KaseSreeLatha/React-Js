import React, { useState } from "react";
import { Grid, Button, Typography } from "@mui/material";

const timeSlots = ["09:00 AM", "10:30 AM", "12:00 PM", "02:00 PM", "04:00 PM", "06:00 PM"];

const TimeSlotPicker = ({ selectedDate, onTimeSelect }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    onTimeSelect(time); // Pass selected time back to parent
  };

  return (
    <div>
      <Typography variant="subtitle1" sx={{ mt: 2, mb: 1 }}>
        Available Time Slots for {selectedDate.format("DD MMM YYYY")}:
      </Typography>
      <Grid container spacing={1}>
        {timeSlots.map((time) => (
          <Grid item xs={4} key={time}>
            <Button
              variant={selectedTime === time ? "contained" : "outlined"}
              color="primary"
              fullWidth
              onClick={() => handleTimeClick(time)}
            >
              {time}
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default TimeSlotPicker;
