const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Game model
class Game extends Model {}

// define table columns and configuration
Game.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },  
      code: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'game',
    }
);

module.exports = Game;
