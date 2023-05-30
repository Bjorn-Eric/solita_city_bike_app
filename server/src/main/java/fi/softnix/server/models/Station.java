package com.example.backend.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "stations")
@NoArgsConstructor
@AllArgsConstructor
public class Station {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String nimi;

    @Column
    private String namn;

    @Column(nullable = false)
    private String osoite;

    @Column
    private String adress;

    @Column(nullable = false)
    private String kaupunki;

    @Column
    private String stad;

    @Column
    private String operaattor;

    @Column(nullable = false)
    private Integer kapasiteet;

    @Column
    private Float x;

    @Column
    private Float y;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNimi() {
        return nimi;
    }

    public void setNimi(String nimi) {
        this.nimi = nimi;
    }

    public String getNamn() {
        return namn;
    }

    public void setNamn(String namn) {
        this.namn = namn;
    }

    public String getOsoite() {
        return osoite;
    }

    public void setOsoite(String osoite) {
        this.osoite = osoite;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public String getKaupunki() {
        return kaupunki;
    }

    public void setKaupunki(String kaupunki) {
        this.kaupunki = kaupunki;
    }

    public String getStad() {
        return stad;
    }

    public void setStad(String stad) {
        this.stad = stad;
    }

    public String getOperaattor() {
        return operaattor;
    }

    public void setOperaattor(String operaattor) {
        this.operaattor = operaattor;
    }

    public Integer getKapasiteet() {
        return kapasiteet;
    }

    public void setKapasiteet(Integer kapasiteet) {
        this.kapasiteet = kapasiteet;
    }

    public Float getX() {
        return x;
    }

    public void setX(Float x) {
        this.x = x;
    }

    public Float getY() {
        return y;
    }

    public void setY(Float y) {
        this.y = y;
    }
}
