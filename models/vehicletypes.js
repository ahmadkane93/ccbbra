const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class vehicletypes extends Model{}

vehicletypes.init(
{

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    types:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    price:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },

},
{

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'vehicletypes',
  }
) 

module.exports = vehicletypes;