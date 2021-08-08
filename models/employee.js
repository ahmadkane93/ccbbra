const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


employee.init(
{

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    address:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    city:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    state:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    zip:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    phone:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    title:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    salary:{
        type: DataTypes.DECIMAL,
        allowNull: true,
    },
    agency_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
{

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'employee',
  }
) 

module.exports = employee;