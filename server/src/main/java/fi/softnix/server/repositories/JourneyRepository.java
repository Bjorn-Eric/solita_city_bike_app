package com.example.backend.repositories;

import com.example.backend.models.Journey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import org.springframework.data.domain.Pageable;
import java.util.List;

public interface JourneyRepository extends JpaRepository<Journey, Integer> {

    @Query("SELECT j FROM Journey j ORDER BY j.id DESC")
    List<Journey> findJourneysWithLimit(@Param("limit") int limit, Pageable pageable);
}