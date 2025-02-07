import { LocalizationProvider, MobileDateTimePicker } from "@mui/lab";
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import swal from "sweetalert";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import useAuth from "../../../Hooks/useAuth";

const Appointment = () => {
  const { user } = useAuth();

  const [value, setValue] = React.useState(new Date());
  const [docName, setDocName] = React.useState("");

  const handleChange = (event) => {
    setDocName(event.target.value);
  };

  const swalAlert = () => {
    if (!docName) {
      swal("Please select a doctor", {
        icon: "error",
        button: "Okay",
      });
    } else {
      swal("Your Appointment is Done. You will receive a confirmation email ASAP.", {
        button: false,
        icon: "success",
      });
    }
  };

  return (
    <Box id="appointment" sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Container maxWidth="xl">
        <Container style={{ justifyContent: "center" }}>
          <Typography variant="h5" sx={{ mt: 5, mb: 5 }}>
            Select your time and date for Appointment
          </Typography>
        </Container>

        {/* Doctor name selection */}
        <FormControl sx={{ mb: 5, minWidth: "50%" }}>
          <InputLabel id="demo-simple-select-autowidth-label">Select Doctor Name</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={docName}
            onChange={handleChange}
            autoWidth
            label="Select Doctor Name"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Dr. Neha A Agrawal</MenuItem>
            <MenuItem value={11}>Dr. Vrushali Naik</MenuItem>
            <MenuItem value={12}>Dr. Tejaswini Manogna</MenuItem>
            <MenuItem value={13}>Dr. Aditya Gupta</MenuItem>
            <MenuItem value={14}>Dr. Vivek K Bansode</MenuItem>
            <MenuItem value={16}>Dr. Pratima J Singh</MenuItem>
            <MenuItem value={17}>Dr. Amit Lanke</MenuItem>
            <MenuItem value={18}>Dr. Johnny Pandit</MenuItem>
            <MenuItem value={19}>Dr. Sandip Nehe</MenuItem>
          </Select>
        </FormControl>

        {/* User info */}
        <TextField sx={{ mb: 2 }} value={user.displayName} fullWidth label="Your Name" id="fullWidth" />
        <TextField sx={{ mb: 2 }} value={user.email} fullWidth label="Your Mail" id="fullWidth" />

        {/* DateTime Picker */}
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <MobileDateTimePicker
              value={value}
              onChange={(newValue) => setValue(newValue)}
              label="Appointment Date"
              minDate={new Date()}
              inputFormat="yyyy/MM/dd hh:mm a"
              mask="___/__/__ __:__ _M"
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>

        {/* Problem type */}
        <TextField sx={{ mt: 2, mb: 2 }} fullWidth label="Problem type" id="fullWidth" />

        {/* Confirm Appointment Button */}
        <Button sx={{ p: 1, mt: 2, mb: 5 }} onClick={swalAlert} fullWidth variant="contained">
          <AddCircleIcon /> Confirm
        </Button>
      </Container>
    </Box>
  );
};

export default Appointment;
