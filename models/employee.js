
const { Model,DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class employee extends Model{}

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
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,

        allowNull: false,
    },
    title:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    salary:{
        type: DataTypes.INTEGER
    },
    agency_id:{
        type: DataTypes.INTEGER,
        reference: {
            modle: 'agency',
            key: 'id'
        },
    },
},
{

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'employee',
  }

); 


module.exports = employee;