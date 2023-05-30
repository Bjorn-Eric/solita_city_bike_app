package com.example.backend.services;

import com.example.backend.models.Journey;
import com.example.backend.repositories.JourneyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class JourneyService {

    @Autowired
    private JourneyRepository journeyRepository;

    public List<Journey> getJourneysWithLimit(int limit) {
        PageRequest pageRequest = PageRequest.of(0, limit, Sort.by(Sort.Direction.DESC, "id"));
        return journeyRepository.findJourneysWithLimit(limit, pageRequest);
    }

    public ResponseEntity<Page<Journey>> getJourneys(int limit, int offset) {
        // Create a Pageable object with the desired limit, offset, and sorting
        Pageable pageable = PageRequest.of(offset, limit, Sort.by(Sort.Direction.ASC, "id"));

        // Retrieve the page of journeys from the repository
        Page<Journey> journeyPage = journeyRepository.findAll(pageable);

        // Return the ResponseEntity with the journeyPage and HTTP status OK
        return ResponseEntity.ok(journeyPage);
    }


    public ResponseEntity<Journey> getJourneyById(Integer id) {
        Optional<Journey> journey = journeyRepository.findById(id);
        return journey.map(journeys -> ResponseEntity.ok().body(journeys)).orElseGet(() -> ResponseEntity.notFound().build());
    }
}

