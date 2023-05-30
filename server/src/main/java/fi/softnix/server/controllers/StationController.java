package com.example.backend.controllers;

import com.example.backend.models.Station;
import com.example.backend.services.StationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:3000")
public class StationController {

    @Autowired
    private StationService stationService;

    // Endpoint to get all stations
    @GetMapping("/stations")
    public ResponseEntity<Page<Station>> getJourneys(@RequestParam(defaultValue = "0") int offset, @RequestParam(defaultValue = "50") int limit) {
        return stationService.getAllStations(limit, offset);
    }

    // Endpoint to get a specific station by ID
    @GetMapping("/station/{id}")
    public ResponseEntity<Station> getStationById(@PathVariable(value = "id") Integer id) {
        return stationService.getStationById(id);
    }

    // Endpoint to create a new station
    @PostMapping("/stations")
    public ResponseEntity<Station> createStation(@RequestBody Station station) {
        return stationService.createStation(station);
    }

}