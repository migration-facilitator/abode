const Sequelize = require('sequelize')
const db = require('../db')

const Comparison = db.define('comparison', {
  homeAddress: {
    type: Sequelize.STRING,
    allowNull: false
  },
  homeCity: {
    type: Sequelize.STRING,
    allowNull: false
  },
  homeState: {
    type: Sequelize.STRING,
    allowNull: false
  },
  homeZipcode: {
    type: Sequelize.STRING,
    allowNull: false
  },
  workAddress: {
    type: Sequelize.STRING,
    allowNull: false
  },
  workCity: {
    type: Sequelize.STRING,
    allowNull: false
  },
  workState: {
    type: Sequelize.STRING,
    allowNull: false
  },
  workZipcode: {
    type: Sequelize.STRING,
    allowNull: false
  },
  radius: {
    type: Sequelize.INTEGER,
  },
  educationWeight: {
    type: Sequelize.INTEGER,
  },
  transitWeight: {
    type: Sequelize.INTEGER,
  },
  costOfLivingWeight: {
    type: Sequelize.INTEGER,
  },
})

module.exports = Comparison
