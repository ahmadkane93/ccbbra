const agency = require('./agency');
const employee = require('./employee');
const customer = require('./customer');
const accounting = require('./accounting');
const vehicle = require('./vehicle');
const reservation = require('./reservation');
const vehicleTypes = require('./vehicletypes')

// AGENCY (1) : EMPLOYEE (*)
agency.hasMany(employee, {
    foreignKey: 'agency_id',
    onDelete: 'CASCADE'
});

employee.belongsTo(agency, {
    foreignKey: 'agency_id'
});

// AGENCY (1): VEHICLE (*)
agency.hasMany(vehicle, {
    foreignKey: 'agency_id',
    onDelete: 'CASCADE'
});

vehicle.belongsTo(agency, {
    foreignKey: 'agency_id'
});

// VEHICLE (1) : RESERVATION (*)
vehicle.hasMany(reservation, {
    foreignKey: 'vehicle_id',
    onDelete: 'CASCADE'
});

reservation.belongsTo(vehicle, {
    foreignKey: 'vehicle_id'
});

// CUSTOMER (1) : RESERVATION (*)
customer.hasMany(reservation, {
    foreignKey: 'customer_id',
    onDelete: 'CASCADE'
});

reservation.belongsTo(customer, {
    foreignKey: 'customer_id'
});

// CUSTOMER (1) : ACCOUNTING (*)
customer.hasMany(accounting, {
    foreignKey: 'customer_id',
    onDelete: 'CASCADE'
});

accounting.belongsTo(customer, {
    foreignKey: 'customer_id'
});

module.exports = { agency, employee, customer, accounting, vehicle, reservation ,vehicleTypes };

