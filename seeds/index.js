// Requirements
const sequelize = require('../config/connection');
const { agency} = require('../models');



// Data Objects
// const accountingData = require('./accountingData.json');
const agencyData = require('./agencyData.json');
// const customerData = require('./customerData.json');

// Seed Database Tables
const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await agency.bulkCreate(agencyData)

    process.exit(0);
};

seedDatabase();