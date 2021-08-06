-- Drop ccbbra_db if one already exists --
DROP DATABASE IF EXISTS ccbbra_db;

-- Create ccbbra_db database --
CREATE DATABASE ccbbra_db;

-- Set the following code to use the ccbbra_db database --
USE ccbbra_db;

CREATE TABLE agency (
    -- Set Primary Key --
    id INTEGER NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    -- Agency company data --
    agencyName VARCHAR(30) NOT NULL,
    address VARCHAR(30) NOT NULL,
    city VARCHAR (10) NOT NULL,
    state VARCHAR (2) NOT NULL,
    zip INTEGER (5) NOT NULL,
    phone INTEGER (10), NOT NULL
    fax INTEGER (10),
    email VARCHAR(30)
);

CREATE TABLE employee (
    -- Set Primary Key --
    id INTEGER NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    -- Employee PII data --
    first_name VARCHAR(30) NOT NULL,
    last_Name VARCHAR(30) NOT NULL,
    address VARCHAR(30) NOT NULL,
    city VARCHAR (10) NOT NULL,
    state VARCHAR (2) NOT NULL,
    zip INTEGER (5) NOT NULL,
    phone INTEGER (10), NOT NULL,
    email VARCHAR(30),
    -- Employee company data --
    title VARCHAR(30),
    salary DECIMAL(7),
    -- Set foreign keys -- 
    agency_id INTEGER NOT NULL,
    FOREIGN KEY (agency_id) REFERENCES agency(id)    
);

CREATE TABLE customer (
    -- Set Primary Key --
    id INTEGER NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    -- Customer PII data --
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    address VARCHAR(30) NOT NULL,
    city VARCHAR (10) NOT NULL,
    state VARCHAR (2) NOT NULL,
    zip INTEGER (5) NOT NULL,
    phone INTEGER (10), NOT NULL,
    email VARCHAR(30),
    -- Set foreign keys -- 
    accounting_id INTEGER NOT NULL,
    FOREIGN KEY (accounting_id) REFERENCES accounting(id),
    reservation_id INTEGER NOT NULL,
    FOREIGN KEY (reservation_id) REFERENCES reservation(id)    
);

CREATE TABLE accounting (
    -- Set Primary Key --
    id INTEGER NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    -- Financial data --
    cardholder_name VARCHAR(30) NOT NULL,
    card_type VARCHAR(10) NOT NULL,
    card_number INTEGER(30) NOT NULL,
    expiration_dt INTEGER(4) NOT NULL,
    ccv INTEGER(3),
    card_zipcode INTEGER(5),
    -- Set foreign keys --
    customer_id INTEGER NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customer(id)
);

CREATE TABLE reservation (
    -- Set Primary Key --
    id INTEGER NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    -- Reservation data --
    payment_type VARCHAR(10) NOT NULL, -- Cash, Check, Credit Card, Bitcoin --
    start_dt DATETIME,
    end_dt DATETIME,
    has_pet BOOLEAN NOT NULL,
    include_gps BOOLEAN NOT NULL,
    include_insurance BOOLEAN NOT NULL,
    daily_rate_insurance DECIMAL(5),
    fuel_prepay BOOLEAN NOT NULL,
    daily_rate_rental DECIMAL(5) NOT NULL,
    -- Set foreign keys --
    customer_id INTEGER NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customer(id),
    vehicle_id INTEGER NOT NULL,
    FOREIGN KEY (vehicle_id) REFERENCES vehicle(id)
);

CREATE TABLE vehicle (
    -- Set Primary Key --
    id INTEGER NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    -- Vehicle data --
    make VARCHAR(10) NOT NULL,
    model VARCHAR(10) NOT NULL,
    model_year DATE(4) NOT NULL,
    vehicle_type VARCHAR(10) NOT NULL,
    vin VARCHAR(30) NOT NULL,
    current_mileage INTEGER(7),
    last_service_dt DATETIME,
    company_insured BOOLEAN NOT NULL,
    -- Set foreign keys -- 
    agency_id INTEGER NOT NULL,
    FOREIGN KEY (agency_id) REFERENCES agency(id),
    reservation_id INTEGER NOT NULL,
    FOREIGN KEY (reservation_id) REFERENCES reservation(id)  
);