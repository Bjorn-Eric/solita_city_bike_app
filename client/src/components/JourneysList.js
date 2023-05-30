import { Box, CircularProgress, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function JourneysList() {
  const [journeys, setJourneys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Added state for total pages
  const [limit, setLimit] = useState(50);

  useEffect(() => {
    const fetchJourneys = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/journeys', {
          params: {
            limit: limit,
            offset: (currentPage - 1)
          }
        });
        const data = response.data;

        setJourneys(data.content);
        setTotalPages(data.totalPages);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch journeys:', error);
      }
    };

    window.scrollTo(0, 0);
    fetchJourneys();
  }, [limit, currentPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  if (loading) {
    return (
      <Box>
        <CircularProgress />
        <Typography variant="body1">Loading journeys...</Typography>
      </Box>
    );
  }

  if (journeys.length === 0) {
    return <Typography variant="body1">No journeys available.</Typography>;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Journeys List
      </Typography>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
        <Select value={limit} size='small' label="Random" onChange={handleLimitChange}>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
          <MenuItem value={200}>200</MenuItem>
          <MenuItem value={500}>500</MenuItem>
        </Select>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Departure</TableCell>
              <TableCell>Depart Station</TableCell>
              <TableCell>Return Date</TableCell>
              <TableCell>Return Station</TableCell>
              <TableCell>Distance (km)</TableCell>
              <TableCell>Duration (min)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {journeys.map((journey) => (
              <TableRow key={journey.id}>
                <TableCell>{journey.id}</TableCell>
                <TableCell>{formatDateTime(journey.departure)}</TableCell>
                <TableCell>{journey.departStation.nimi}</TableCell>
                <TableCell>{formatDateTime(journey.returnDate)}</TableCell>
                <TableCell>{journey.returnStation.nimi}</TableCell>
                <TableCell>{(journey.distance / 1000).toFixed(2)} km</TableCell>
                <TableCell>{Math.floor(journey.duration / 60)} min {journey.duration % 60} sec</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

function formatDateTime(dateTime) {
  const date = new Date(dateTime);

  const formattedDateTime = date.toLocaleDateString().replace(/\//g, '.');

  return formattedDateTime;
}

export default JourneysList;
