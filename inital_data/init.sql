-- Create the 'stations' table
CREATE TABLE IF NOT EXISTS citybike.stations (
    id         INT AUTO_INCREMENT PRIMARY KEY,
    nimi       VARCHAR(255) NOT NULL,
    namn       VARCHAR(255),
    osoite     TEXT NOT NULL,
    adress     TEXT,
    kaupunki   VARCHAR(255) NOT NULL,
    stad       VARCHAR(255),
    operaattor VARCHAR(255),
    kapasiteet INT NOT NULL,
    x          FLOAT,
    y          FLOAT
);

-- Create the 'journey' table
CREATE TABLE IF NOT EXISTS citybike.journey (
    id        INT AUTO_INCREMENT PRIMARY KEY,
    departure DATETIME NOT NULL,
    `return`  DATETIME NOT NULL,
    depart_id INT NOT NULL,
    return_id INT NOT NULL,
    distance  BIGINT NOT NULL,
    duration  BIGINT NOT NULL,
    CONSTRAINT journey_ibfk_1 FOREIGN KEY (depart_id) REFERENCES citybike.stations (id),
    CONSTRAINT journey_ibfk_2 FOREIGN KEY (return_id) REFERENCES citybike.stations (id)
);

-- Create indexes on 'journey' table
CREATE INDEX depart_id ON citybike.journey (depart_id);
CREATE INDEX return_id ON citybike.journey (return_id);

-- Import data into 'stations' table from CSV file
LOAD DATA INFILE './output1.csv'
INTO TABLE citybike.stations
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES
(nimi, namn, osoite, adress, kaupunki, stad, operaattor, kapasiteet, x, y);

-- Import data into 'stations' table from CSV file
LOAD DATA INFILE './output2.csv'
INTO TABLE citybike.stations
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES
(nimi, namn, osoite, adress, kaupunki, stad, operaattor, kapasiteet, x, y);

-- Import data into 'stations' table from CSV file
LOAD DATA INFILE './output3.csv'
INTO TABLE citybike.stations
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES
(nimi, namn, osoite, adress, kaupunki, stad, operaattor, kapasiteet, x, y);


-- Import data into 'journey' table from CSV file
LOAD DATA INFILE './stations.csv'
INTO TABLE citybike.journey
FIELDS TERMINATED BY ',' ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES
(departure, `return`, depart_id, return_id, distance, duration);
