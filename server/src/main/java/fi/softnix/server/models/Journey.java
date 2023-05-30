package com.example.backend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;


@Entity
@Table(name = "journey")
@NoArgsConstructor
@AllArgsConstructor
public class Journey {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "departure", nullable = false)
    private LocalDateTime departure;

    @Column(name = "return", nullable = false)
    private LocalDateTime returnDate;

    @ManyToOne
    @JoinColumn(name = "depart_id", nullable = false)
    private Station departStation;

    @ManyToOne
    @JoinColumn(name = "return_id", nullable = false)
    private Station returnStation;

    @Column(name = "distance", nullable = false)
    private Long distance;

    @Column(name = "duration", nullable = false)
    private Long duration;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public LocalDateTime getDeparture() {
        return departure;
    }

    public void setDeparture(LocalDateTime departure) {
        this.departure = departure;
    }

    public LocalDateTime getReturnDate() {
        return returnDate;
    }

    public void setReturnDate(LocalDateTime returnDate) {
        this.returnDate = returnDate;
    }

    public Station getDepartStation() {
        return departStation;
    }

    public void setDepartStation(Station departStation) {
        this.departStation = departStation;
    }

    public Station getReturnStation() {
        return returnStation;
    }

    public void setReturnStation(Station returnStation) {
        this.returnStation = returnStation;
    }

    public Long getDistance() {
        return distance;
    }

    public void setDistance(Long distance) {
        this.distance = distance;
    }

    public Long getDuration() {
        return duration;
    }

    public void setDuration(Long duration) {
        this.duration = duration;
    }
}
