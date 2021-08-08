
const { Model,DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const vehicle = require('./vehicle');

class reservation extends Model{}


reservation.init(
{

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    payment_type:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    start_dt:{

        type: DataTypes.DATETIME,
        allowNull: true,
    },
    end_dt:{
        type: DataTypes.DATETIME,
        allowNull: true,

    },
    has_pet:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    include_gps:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    include_insurance:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    daily_rate_insurance:{
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    fuel_prepay:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    daily_rate_rental:{
        type: DataTypes.DECIMAL,

        allowNull:false,
    },
    agency_id:{
        type: DataTypes.INTEGER,
        reference: {
            modle: 'agency',
            key: 'id'
        },
    },
    vehical_id: {
        type:DataTypes.INTEGER,
        reference: {
            model: 'vehicle',
            key: 'id'
        }
    }


},
{

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'reservation',
  }

); 

module.exports = reservation;