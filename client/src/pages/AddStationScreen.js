import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Alert } from '@mui/material';
import axios from 'axios';

function AddStationScreen() {
  
  const [successAlertVisible, setSuccessAlertVisible] = useState(false);
  const [errorAlertVisible, setErrorAlertVisible] = useState(false);

  const [stationData, setStationData] = useState({
    nimi: '',
    osoite: '',
    kaupunki: '',
    x: '',
    y: '',
    kapasiteet: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStationData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/stations', stationData);

      setStationData({
        nimi: '',
        osoite: '',
        kaupunki: '',
        x: '',
        y: '',
        kapasiteet: 0,
      });

      console.log('Station added successfully!');

      setSuccessAlertVisible(true);
      
      setTimeout(() => {
        setSuccessAlertVisible(false);
      }, 3000); // Hide the success alert after 3 seconds

    } catch (error) {
      
      console.error('Error adding station:', error);
      
      setErrorAlertVisible(true);
      setTimeout(() => {
        setErrorAlertVisible(false);
      }, 3000); // Hide the error alert after 3 seconds
      
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Add New Station
      </Typography>
      {successAlertVisible && (
        <Alert severity="success" onClose={() => setSuccessAlertVisible(false)}>
          Station added successfully!
        </Alert>
      )}
      {errorAlertVisible && (
        <Alert severity="error" onClose={() => setErrorAlertVisible(false)}>
          Failed to add station!
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="nimi"
          label="Name"
          value={stationData.nimi}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          name="osoite"
          label="Address"
          value={stationData.osoite}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          name="kaupunki"
          label="City"
          value={stationData.kaupunki}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          name="kapasiteet"
          label="Capacity"
          type="number"
          value={stationData.kapasiteet}
          onChange={handleChange}
          required
          fullWidth
          margin="normal"
        />
        <TextField
          name="x"
          label="Longitude"
          type="number"
          value={stationData.x}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="y"
          label="Latitude"
          type="number"
          value={stationData.y}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Add Station
        </Button>
      </form>
    </Box>
  );
}

export default AddStationScreen;