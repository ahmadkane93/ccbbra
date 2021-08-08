const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class vehicle extends Model{}

vehicle.init(
{

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    make:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    model:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    model_year:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    vehicle_type:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    vin:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    current_milage:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    last_service_dt:{
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    agency_id:{
        type: DataTypes.STRING,
        allowNull: true,
    },

},
{

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'vehicle',
  }
) 

module.exports = vehicle;