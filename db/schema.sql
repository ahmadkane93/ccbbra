-- Drop ccbbra_db if one already exists --
DROP DATABASE IF EXISTS ccbbra_db;

-- Create ccbbra_db database --
CREATE DATABASE ccbbra_db;

-- Set the following code to use the ccbbra_db database --
USE ccbbra_db;

CREATE TABLE agency (
    -- Primary Key --
    id INTEGER NOT NULL AUTO_INCREMENT,
    -- Set agency table primary key --
    PRIMARY KEY (id),
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
    -- Primary Key --
    id INTEGER NOT NULL AUTO_INCREMENT,
    -- Set employee table primary key --
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
    -- Primary Key --
    id INTEGER NOT NULL AUTO_INCREMENT,
    -- Set customer table primary key --
    PRIMARY KEY (id),
    -- Set foreign keys -- 
    accounting_id INTEGER NOT NULL,
    FOREIGN KEY (accounting_id) REFERENCES accounting(id),
    reservation_id INTEGER NOT NULL,
    FOREIGN KEY (reservation_id) REFERENCES reservation(id)    
);

CREATE TABLE vehicle (
    -- Primary Key --
    id INTEGER NOT NULL AUTO_INCREMENT,
    -- Set vehicle table primary key --
    PRIMARY KEY (id),
    -- Set foreign keys -- 
    agency_id INTEGER NOT NULL,
    FOREIGN KEY (agency_id) REFERENCES agency(id),
    reservation_id INTEGER NOT NULL,
    FOREIGN KEY (reservation_id) REFERENCES reservation(id)  
);

CREATE TABLE accounting (
    -- Primary Key --
    id INTEGER NOT NULL AUTO_INCREMENT,
    -- Set accounting table primary key --
    PRIMARY KEY (id),
    -- Set foreign keys --
    customer_id INTEGER NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customer(id)
);

CREATE TABLE reservation (
    -- Primary Key --
    id INTEGER NOT NULL AUTO_INCREMENT,
    -- Set reservation table primary key --
    PRIMARY KEY (id),
    -- Set foreign keys --
    customer_id INTEGER NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customer(id)
);