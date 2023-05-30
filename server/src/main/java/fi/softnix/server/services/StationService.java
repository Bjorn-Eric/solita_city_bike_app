package com.example.backend.services;

import com.example.backend.models.Station;
import com.example.backend.repositories.StationsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StationService {


    @Autowired
    private StationsRepository stationsRepository;

    public List<Station> getAllStations(){
        return stationsRepository.findAll();
    }

    public ResponseEntity<Station> getStationById(Integer id) {
        Optional<Station> station = stationsRepository.findById(id);
        return station.map(stations -> ResponseEntity.ok().body(stations)).orElseGet(() -> ResponseEntity.notFound().build());
    }

    public ResponseEntity<Page<Station>> getAllStations(int limit, int offset) {
        // Create a Pageable object with the desired limit, offset, and sorting
        Pageable pageable = PageRequest.of(offset, limit, Sort.by(Sort.Direction.ASC, "id"));

        // Retrieve the page of journeys from the repository
        Page<Station> stationPage = stationsRepository.findAll(pageable);

        // Return the ResponseEntity with the journeyPage and HTTP status OK
        return ResponseEntity.ok(stationPage);
    }

    public ResponseEntity<Station> createStation(Station station) {

        // Save the new station to the database
        Station savedStation = stationsRepository.save(station);

        // Return the created station with a success response
        return ResponseEntity.status(HttpStatus.CREATED).body(savedStation);
    }

}
