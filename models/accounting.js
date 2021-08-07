const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


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
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    expiration_dt:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ccv:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    card_zipcode:{
        type: DataTypes.INTEGER,
        allowNull: false,
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