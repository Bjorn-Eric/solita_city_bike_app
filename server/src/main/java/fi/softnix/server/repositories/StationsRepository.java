package com.example.backend.repositories;

import com.example.backend.models.Station;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface StationsRepository extends JpaRepository<Station, Integer> {

    @Query("SELECT COUNT(j) FROM Journey j WHERE j.departStation = :station")
    Long getJourneysStartedCount(@Param("station") Station station);

    @Query("SELECT COUNT(j) FROM Journey j WHERE j.returnStation = :station")
    Long getJourneysEndedCount(@Param("station") Station station);

}