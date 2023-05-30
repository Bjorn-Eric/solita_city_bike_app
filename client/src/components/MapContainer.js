import { Box, Typography } from '@mui/material';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function MapContainer({ station }) {
  const mapsKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const markerPosition = {
    lat: station.y,
    lng: station.x,
  };

  const mapOptions = {
    zoomControl: true,
    fullscreenControl: false,
    mapTypeId: 'satellite', // Set map type to satellite
    zoom: 17
  };

  if(station.x == null || station.y == null){
    return (
    <Box>
      <Typography variant="h4" gutterBottom>Map not available due to missing coordinates...</Typography>
    </Box>
    )
  }

  return (
    <LoadScript googleMapsApiKey={mapsKey}>
      <GoogleMap mapContainerStyle={mapStyles} center={markerPosition} options={mapOptions}>
        <Marker position={markerPosition} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapContainer;
