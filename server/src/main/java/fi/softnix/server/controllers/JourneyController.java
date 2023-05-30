package com.example.backend.controllers;

import com.example.backend.models.Journey;
import com.example.backend.services.JourneyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:3000")
public class JourneyController {

    @Autowired
    private JourneyService journeyService;


    // Endpoint to get all stations
    @GetMapping("/journeys")
    public ResponseEntity<Page<Journey>> getJourneys(@RequestParam(defaultValue = "0") int offset, @RequestParam(defaultValue = "50") int limit) {
        return journeyService.getJourneys(limit, offset);
    }

    // Endpoint to get a specific journey by ID
    @GetMapping("/journey/{id}")
    public ResponseEntity<Journey> getJourneyById(@PathVariable(value = "id") Integer id) {
        return journeyService.getJourneyById(id);
    }
}
