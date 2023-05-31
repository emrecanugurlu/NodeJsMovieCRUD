'use strict';

const {Sequelize,DataTypes} = require('sequelize');
const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const Movie = sequelize.define('Movies', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imdb: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},{
  timestamps : false
}
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Movie = Movie
module.exports = db;
