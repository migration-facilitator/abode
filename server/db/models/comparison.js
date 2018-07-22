const Sequelize = require('sequelize')
const db = require('../db')

const Comparison = db.define('comparison', {
  home: {
    type: Sequelize.STRING,
    allowNull: false
  },
  work: {
    type: Sequelize.STRING,
    allowNull: false
  },
  radius: {
    type: Sequelize.INTEGER,
    defaultValue: 5,
  },
  educationWeight: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
  transitWeight: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
  costOfLivingWeight: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
})

module.exports = Comparison
