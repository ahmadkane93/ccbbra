const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class accounting extends Model{}

accounting.init(
{

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    cardholder_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    card_type:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    card_number:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    expiration_dt:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    ccv:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    card_zipcode:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    customer_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },

},
{

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'accounting',
  }
) 

module.exports = accounting;