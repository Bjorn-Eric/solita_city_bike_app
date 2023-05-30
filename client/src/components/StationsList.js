import { Box, CircularProgress, Link, MenuItem, Pagination, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

function StationsList() {
  const [stations, setStations] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortColumn, setSortColumn] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Added state for total pages
  const [limit, setLimit] = useState(50);

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/stations', {
          params: {
            limit: limit,
            offset: (currentPage - 1)
          }
        });
        const data = response.data;

        setStations(data.content);
        setOriginalData(data.content);
        setTotalPages(data.totalPages);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch stations:', error);
      }
    };

    fetchStations();
  }, [limit, currentPage]);

  const handleSort = (column) => {
    if (column === sortColumn) {
      // Toggle sort order if clicking on the same column
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // Set the new sort column and reset sort order
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  useEffect(() => {
    const sortedStations = [...originalData].sort((a, b) => {
      const valueA = a[sortColumn];
      const valueB = b[sortColumn];

      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return sortOrder === 'asc' ? valueA - valueB : valueB - valueA;
      } else if (typeof valueA === 'string' && typeof valueB === 'string') {
        return sortOrder === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
      } else {
        return 0;
      }
    });

    setStations(sortedStations);
  }, [sortColumn, sortOrder, originalData]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStations = stations.filter((station) =>
    station.nimi.toLowerCase().includes(searchTerm.toLowerCase()) ||
    station.osoite.toLowerCase().includes(searchTerm.toLowerCase()) ||
    station.kaupunki.toLowerCase().includes(searchTerm.toLowerCase()) ||
    station.operaattor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <Box>
        <CircularProgress />
        <Typography variant="body1">Loading stations...</Typography>
      </Box>
    );
  }

  if (stations.length === 0) {
    return <Typography variant="body1">No stations available.</Typography>;
  }

  return (
    <Box>
      <Typography variant="h4" component="h1" sx={{textAlign: "center"}} gutterBottom>Station List</Typography>
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
      <TextField
        label="Search"
        value={searchTerm}
        onChange={handleSearch}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Link component={RouterLink} to="/add-station" variant="body2">
        Add New Station
      </Link>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={sortColumn === 'id'}
                  direction={sortOrder}
                  onClick={() => handleSort('id')}
                >
                  ID
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortColumn === 'nimi'}
                  direction={sortOrder}
                  onClick={() => handleSort('nimi')}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortColumn === 'osoite'}
                  direction={sortOrder}
                  onClick={() => handleSort('osoite')}
                >
                  Address
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortColumn === 'kaupunki'}
                  direction={sortOrder}
                  onClick={() => handleSort('kaupunki')}
                >
                  City
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortColumn === 'operaattor'}
                  direction={sortOrder}
                  onClick={() => handleSort('operaattor')}
                >
                  Operator
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortColumn === 'kapasiteet'}
                  direction={sortOrder}
                  onClick={() => handleSort('kapasiteet')}
                >
                  Capacity
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredStations.map((station) => (
              <TableRow key={station.id}>
                <TableCell>{station.id}</TableCell>
                <TableCell>{station.nimi}</TableCell>
                <TableCell>{station.osoite}</TableCell>
                <TableCell>{station.kaupunki}</TableCell>
                <TableCell>{station.operaattor}</TableCell>
                <TableCell>{station.kapasiteet}</TableCell>
                <TableCell>
                  <Link component={RouterLink} to={`/station/${station.id}`}>
                    View Details
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default StationsList;
