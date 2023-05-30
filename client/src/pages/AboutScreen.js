import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutScreen = () => {
  return (
    <Box maxWidth="800px" mx="auto" p={3}>
      <Typography variant="h4" component="h1" gutterBottom>
        About City Bike App
      </Typography>
      <Typography variant="body1" paragraph>
        The City Bike App is a web application that provides information about city bike stations and allows users to
        view available bikes, find nearby stations, and plan their bike journeys.
      </Typography>
      <Typography variant="body1" paragraph>
        This application utilizes a RESTful API to fetch data about city bike stations and journeys. The API provides
        endpoints to retrieve information about stations, including their location, capacity, and operator, as well as
        endpoints to retrieve information about bike journeys, including the departure and return dates, and the
        respective stations involved.
      </Typography>
      <Typography variant="body1" paragraph>
        The City Bike App is built using React, a popular JavaScript library for building user interfaces. It uses React
        Router for managing application routing and navigation. Material-UI is used as the UI component library to create
        a modern and responsive user interface.
      </Typography>
      <Typography variant="body1" paragraph>
        The application allows users to browse available city bike stations, view detailed information about each
        station, including its address, capacity, and operator. Users can also search for nearby stations based on their
        current location. In addition, users can view a list of bike journeys, including the departure and return dates,
        and the respective stations involved in each journey.
      </Typography>
      <Typography variant="body1" paragraph>
        The City Bike App aims to provide a convenient and user-friendly experience for city bike enthusiasts, making it
        easy to find and utilize city bike stations for their transportation needs.
      </Typography>
      <Typography variant="body1" paragraph>
        We hope you enjoy using the City Bike App and have a great biking experience!
      </Typography>
    </Box>
  );
};

export default AboutScreen;
