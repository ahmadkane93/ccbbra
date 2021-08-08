
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

        type: DataTypes.DATE,
        allowNull: true,
    },
    end_dt:{
        type: DataTypes.DATE,
        allowNull: true,

    },
    has_pet:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    include_gps:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    include_insurance:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    daily_rate_insurance:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    fuel_prepay:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    daily_rate_rental:{
        type: DataTypes.STRING,

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