import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, CircularProgress, Grid, Paper } from '@mui/material';
import axios from 'axios';
import { Box } from '@mui/system';
import MapContainer from '../components/MapContainer';

function StationDetailScreen() {
  const { id } = useParams();
  const [station, setStation] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch station details
  useEffect(() => {
    const fetchStationDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/station/${id}`);
        setStation(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching station details:', error);
        setLoading(false);
      }
    };

    fetchStationDetails();
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  if (!station) {
    return (
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h6">Station not found</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h4" gutterBottom>
              {station.nimi}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Osoite: {station.osoite}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Kaupunki: {station.kaupunki}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Haltija: {station.operaattor}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Kapasiteetti: {station.kapasiteet}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper elevation={3} sx={{ height: 400 }}>
            <MapContainer station={station} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default StationDetailScreen;
