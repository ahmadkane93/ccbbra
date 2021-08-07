// Requirements
import sequelize from '../config/connection';
const { Accounting, Agency, Customer } = require('../models');

// Data Objects
const accountingData = require('./accountingData.json');
const agencyData = require('./agencyData.json');
const customerData = require('./customerData.json');

// Seed Database Tables
const seedDatabase = async () => {
    await sequelize.async({ force: true });

    const agency = await Agency.bulkCreate(agencyData, {
         
 
    });

    process.exit(0);
};

seedDatabase();