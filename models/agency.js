const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class agency extends Model{}


agency.init(
{

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    agencyName:{
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
    fax:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: true,
    },

},
{

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'agency',
  }
) 

module.exports = agency;