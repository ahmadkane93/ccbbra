// Requirements
const sequelize = require('../config/connection');

const { agency, employee, customer, accounting, vehicle, reservation } = require('../models');

// Data Objects
const agencyData = require('./agencyData.json');
const employeeData = require('./employeeData');
const customerData = require('./customerData.json');
const accountingData = require('./accountingData.json');
const vehicleData = require('./vehicleData.json');
const reservationData = require('./reservationData.json');


// Seed Database Tables
const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await customer.bulkCreate(customerData,{
        individualHooks: true,
        returning: true,});
    await agency.bulkCreate(agencyData);
    await employee.bulkCreate(employeeData);
    
    await vehicle.bulkCreate(vehicleData);
    
    await accounting.bulkCreate(accountingData);
    
    await reservation.bulkCreate(reservationData);



    process.exit(0);
};

seedDatabase();